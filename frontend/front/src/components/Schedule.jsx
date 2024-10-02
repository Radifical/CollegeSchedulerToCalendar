import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Paper, Grid } from '@mui/material';

const CLIENT_ID = '374941298844-5e9jb2800ic913ulcmir95to60hh41nl.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDW_idAW_QJJFoKf-g3lne0W0cByZk6aj8';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.file';

let tokenClient;
let gapiInited = false;
let gisInited = false;

const Schedule = ({ user }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${user.id}`);
        setSchedule(response.data.schedule || []); // Ensure schedule is an array
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };


    fetchSchedule();
  }, [user]);

  useEffect(() => {
    // Load the Google API client and auth2 library
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => gapiLoaded();
    document.body.appendChild(script);

    const gisScript = document.createElement('script');
    gisScript.src = 'https://accounts.google.com/gsi/client';
    gisScript.onload = () => gisLoaded();
    document.body.appendChild(gisScript);
  }, []);

  const gapiLoaded = () => {
    gapi.load('client', initializeGapiClient);
  };


  const initializeGapiClient = async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    });
    gapiInited = true;
    maybeEnableButtons();
  };

  const gisLoaded = () => {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
  };

  const maybeEnableButtons = () => {
    if (gapiInited && gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await listUpcomingEvents();
    };

    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token, () => {
        gapi.client.setToken('');
        document.getElementById('content').innerText = '';
        document.getElementById('authorize_button').innerText = 'Authorize';
        document.getElementById('signout_button').style.visibility = 'hidden';
      });
    }
  };

  const listUpcomingEvents = async () => {
    let response;
    try {
      const request = {
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    const events = response.result.items;
    if (!events || events.length === 0) {
      document.getElementById('content').innerText = 'No events found.';
      return;
    }

    // Flatten to string to display
    const output = events.reduce(
      (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
      'Events:\n');
    document.getElementById('content').innerText = output;
  };

  const addGoogleCalendar = async () => {
    const dayMap = {
      'Su': 'SU',
      'M': 'MO',
      'T': 'TU',
      'W': 'WE',
      'Th': 'TH',
      'F': 'FR',
      'S': 'SA'
    };

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    for (const course of schedule) {
      for (const time of course.times) {
        console.log('Processing time:', time); // Debugging log

        // Split the dates string into start and end dates
        const [startDateStr, endDateStr] = time.dates.split(' - ');

        // Create Date objects from the start and end date strings
        const semesterStartDate = new Date(startDateStr);
        const semesterEndDate = new Date(endDateStr);

        if (isNaN(semesterStartDate) || isNaN(semesterEndDate)) {
          console.error('Invalid date value:', startDateStr, endDateStr);
          continue;
        }


        // Parse the time string to get start and end times
        const [startTimeStr, endTimeStr] = time.time.split(' - ');
        const [startHour, startMinute, startPeriod] = parseTime(startTimeStr);
        const [endHour, endMinute, endPeriod] = parseTime(endTimeStr);

        if (!startPeriod || !endPeriod) {
          console.error('Invalid time format:', startTimeStr, endTimeStr);
          continue;
        }

        // Calculate the first occurrence of the class
        const today = new Date();
        const classDays = time.day.match(/(Su|M|T(?!h)|W|Th|F|S)/g).map(day => dayMap[day]);
        const daysUntilClass = classDays.map(classDay => {
          const dayIndex = Object.keys(dayMap).findIndex(key => dayMap[key] === classDay);
          return (dayIndex - today.getDay() + 7) % 7;
        });
        const nextClassDay = Math.min(...daysUntilClass);
        const firstClassDate = new Date(today);
        firstClassDate.setDate(today.getDate() + nextClassDay);
        firstClassDate.setHours(convertTo24HourFormat(startHour, startPeriod), startMinute);

        const endClassDate = new Date(firstClassDate);
        endClassDate.setHours(convertTo24HourFormat(endHour, endPeriod), endMinute);

        // Debugging logs for date values
        console.log('First class date:', firstClassDate);
        console.log('End class date:', endClassDate);
        console.log('Semester end date:', semesterEndDate);

        if (isNaN(firstClassDate) || isNaN(endClassDate)) {
          console.error('Invalid class date value:', firstClassDate, endClassDate);
          continue;
        }


        const event = {
          summary: course.courseName,
          location: time.location,
          description: `Course: ${course.courseName} - ${time.location}`,
          start: {
            dateTime: firstClassDate.toISOString(),
            timeZone: 'America/Los_Angeles',
          },
          end: {
            dateTime: endClassDate.toISOString(),
            timeZone: 'America/Los_Angeles',
          },
          recurrence: [`RRULE:FREQ=WEEKLY;BYDAY=${classDays.join(',')};UNTIL=${semesterEndDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`],
          attendees: [
            { email: 'abc@google.com' },
            { email: 'xyz@google.com' },
          ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: 'email', minutes: 24 * 60 },
              { method: 'popup', minutes: 10 },
            ],
          },
        };

        try {
          console.log('Event payload:', event); // Log the event payload
          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });

          request.execute((event) => {
            if (event.error) {
              console.error('Error creating event:', event.error);
            } else {
              console.log(`Event created: ${event.htmlLink}`);
            }
          });
        } catch (error) {
          console.error('Error creating event:', error);
        }

        // Introduce a delay to avoid rate limits
        await delay(500); // 500ms delay
      }
    }
  };

  const parseTime = (timeStr) => {
    const timePattern = /(\d+):(\d+)\s*(am|pm)/i;
    const match = timeStr.match(timePattern);
    if (!match) {
      console.error('Invalid time string:', timeStr);
      return [null, null, null];
    }
    const [, hour, minute, period] = match;
    return [parseInt(hour), parseInt(minute), period];
  };


  const convertTo24HourFormat = (hour, period) => {
    if (period.toLowerCase() === 'pm' && hour !== 12) {
      return hour + 12;
    }
    if (period.toLowerCase() === 'am' && hour === 12) {
      return 0;
    }
    return hour;
  };

  const handleImportClick = async () => {
    try {
      await addGoogleCalendar();
      console.log('Schedule imported to Google Calendar successfully.');
    } catch (error) {
      console.error('Error importing schedule to Google Calendar:', error);
    }
  };

  const handleDeleteAllEventsClick = async () => {
    try {
      await deleteAllGoogleCalendarEvents();
      console.log('All events deleted from Google Calendar successfully.');
    } catch (error) {
      console.error('Error deleting events from Google Calendar:', error);
    }
  };

  const deleteAllGoogleCalendarEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        showDeleted: false,
        singleEvents: true,
        maxResults: 2500,
        orderBy: 'startTime',
      });

      const events = response.result.items;
      if (!events || events.length === 0) {
        console.log('No events found.');
        return;
      }

      for (const event of events) {
        try {
          await gapi.client.calendar.events.delete({
            calendarId: 'primary',
            eventId: event.id,
          });
        } catch (error) {
          if (error.status === 410) {
            console.log(`Event already deleted: ${event.id}`);
          } else {
            throw error;
          }
        }
      }
    } catch (error) {
      console.error('Error deleting events:', error);
    }
  };

  return (
    <Container className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
      <Typography variant="h4" className="text-white mb-6 glow-text">{user.username}'s Schedule</Typography>
      <Box mt={4}>
        <Button id="authorize_button" variant="contained" className="glow-button bg-blue-600 hover:bg-blue-500 text-white" onClick={handleAuthClick}>
          Authorize with Google
        </Button>
        <Button id="signout_button" variant="contained" className="glow-button bg-red-600 hover:bg-red-500 text-white ml-4" onClick={handleSignoutClick}>
          Sign Out
        </Button>
        <Button variant="contained" className="glow-button bg-blue-600 hover:bg-blue-500 text-white ml-4" onClick={handleImportClick}>
          Import Schedule to Google Calendar
        </Button>
        <Button variant="contained" className="glow-button bg-red-600 hover:bg-red-500 text-white ml-4" onClick={handleDeleteAllEventsClick}>
          Delete All Events
        </Button>
      </Box>
      <Grid container spacing={2} className="mt-4">
        {schedule.length > 0 ? (
          schedule.map((course, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper className="bg-gray-800 p-4 rounded-lg shadow-md">
                <Typography variant="h6" className="text-white">{course.courseName}</Typography>
                {course.times.map((time, idx) => (
                  <Typography key={idx} variant="body2" className="text-gray-400">
                    {time.day} {time.time} {time.dates} {time.location}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography>No courses found.</Typography>
        )}
      </Grid>
      <pre id="content" className="mt-4"></pre>
    </Container>
  );
};


export default Schedule;
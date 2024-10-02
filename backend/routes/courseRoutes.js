const express = require('express');
const Course = require('../models/course');
const User = require('../models/userModel');  // Import the User model
const router = express.Router();
const mongoose = require('mongoose');

// Route to add or update course details
router.post('/add-courses', async (req, res) => {
  try {
    console.log("Request body:", req.body);  // Log the request body for debugging
    const { courseNames, courseTimes, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    // Validate that courseNames and courseTimes are arrays
    if (!Array.isArray(courseNames) || !Array.isArray(courseTimes)) {
      return res.status(400).json({ message: 'Invalid input: courseNames and courseTimes must be arrays' });
    }

    // Validate that courseNames and courseTimes have the same length
    if (courseNames.length !== courseTimes.length) {
      return res.status(400).json({ message: 'Mismatched arrays: courseNames and courseTimes must have the same length' });
    }

    // Fetch the user so we can update their schedule later
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Loop through the courses and times
    for (let i = 0; i < courseNames.length; i++) {
      const course = courseNames[i].trim();
      const time = courseTimes[i].trim();
    
      // Use regex or string splitting to extract day, time, dates, and location
      const timeDetails = time.match(/(\w+)\s+(\d{1,2}:\d{2}[ap]m\s*-\s*\d{1,2}:\d{2}[ap]m)\s+(\d{2}\/\d{2}\/\d{4}\s*-\s*\d{2}\/\d{2}\/\d{4})\s*-\s*(.*)/);
    
      if (timeDetails) {
        const [_, day, timeRange, dates, location] = timeDetails;
    
        // Check if the course already exists
        let existingCourse = await Course.findOne({ courseName: course, userId });
    
        let newCourse;  // Initialize newCourse here to avoid undefined errors
    
        if (existingCourse) {
          // If course exists, push new time into the course's times array
          existingCourse.times.push({
            day: day,
            time: timeRange,
            dates: dates,
            location: location
          });
    
          await existingCourse.save();
        } else {
          // If course does not exist, create a new document
          newCourse = new Course({
            courseName: course,
            times: [{
              day: day,
              time: timeRange,
              dates: dates,
              location: location
            }],
            userId: userId  // Ensure userId is included here
          });
    
          await newCourse.save();
        }
    
        // Update the user's schedule array (with ObjectId references)
        const courseToCheck = existingCourse ? existingCourse._id : newCourse._id;  // Use either existingCourse or newCourse
        const isAlreadyInSchedule = user.schedule.some((c) => c.equals(courseToCheck));
    
        if (!isAlreadyInSchedule) {
          user.schedule.push(courseToCheck);
        }
      }
    }
    

    // Save the updated user schedule
    await user.save();

    res.status(200).json({ message: 'Courses successfully added/updated' });
  } catch (err) {
    console.error('Error adding/updating courses:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route to fetch all courses
router.get('/courses', async (req, res) => {
    try {
      const courses = await Course.find();  // Fetch all courses from the database
      res.status(200).json(courses);  // Return courses in JSON format
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Error fetching courses' });
    }
  });

// GET route to fetch a specific course by courseName or courseId
router.get('/course/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;

    // Check if the identifier is a valid ObjectId (assumes you're using MongoDB ObjectId for _id)
    let course;
    if (mongoose.Types.ObjectId.isValid(identifier)) {
      // Search by course _id
      course = await Course.findById(identifier);
    } else {
      // Search by courseName
      course = await Course.findOne({ courseName: identifier });
    }

    // If the course is not found, return 404
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Return the found course
    res.status(200).json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Login successful:', data);
      document.getElementById('title').innerText = 'Hey ' + username + '!';
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('extract-table').style.display = 'block';-
      chrome.storage.local.set({ userId: data.id }, () => {
        console.log('User ID stored in Chrome local storage');
      });
    } else {
      console.error('Login failed:', data.message);
      alert('Login failed: ' + data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login error: ' + error.message);
  }
});

document.getElementById('btnOpenNewTab').addEventListener('click', () => {
  chrome.tabs.create({ url: 'http://localhost:5173/signup' });
});

document.getElementById('extractBtn').addEventListener('click', () => {
  chrome.storage.local.get('userId', (result) => {
    const userId = result.userId;
    if (!userId) {
      alert('Please log in first.');
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: extractTableData,
      }, (results) => {
        if (results && results[0] && results[0].result) {
          const { courseName, courseTime } = results[0].result;
          addCoursesToUserSchedule(userId, courseName, courseTime);
        }
      });
    });
  });
});

function extractTableData() {
  const table = document.querySelector('div.css-1cycab9-tableCss table');
  if (table) {
    const rows = table.querySelectorAll('tr');
    let courseName = [];
    let courseTime = [];

    rows.forEach((row) => {
      const subject = row.querySelector('td.css-e10b98-cellCss + td');
      const timeDiv = row.querySelectorAll('td')[8];

      const courseDetails = subject ? subject.nextElementSibling : null;

      if (subject && courseDetails && timeDiv) {
        const subjectText = subject.innerText.trim();
        const courseText = courseDetails.innerText.trim();

        let timeText = '';
        const spans = timeDiv.querySelectorAll('span');
        const textTime = timeDiv.querySelectorAll('div')[2];
        timeText += textTime.innerText + ' ';

        courseName.push(subjectText + ' ' + courseText);
        courseTime.push(timeText);
      }
    });

    return { courseName, courseTime };
  } else {
    console.log('Table not found');
    alert('Table not found');
    return null;
  }
}

async function addCoursesToUserSchedule(userId, courseNames, courseTimes) {
  try {
    const response = await fetch('http://localhost:3000/api/add-courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, courseNames, courseTimes }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Courses added to user schedule:', data);
      alert('Courses added to your schedule successfully.');
    } else {
      console.error('Failed to add courses:', data.message);
      alert('Failed to add courses: ' + data.message);
    }
  } catch (error) {
    console.error('Error adding courses:', error);
    alert('Error adding courses: ' + error.message);
  }
}

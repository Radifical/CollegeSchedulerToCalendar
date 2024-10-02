# 📅 Schedule2Calendar

Welcome to **Schedule2Calendar**! This project is designed to help SUNY (State University of New York) students easily export their schedules to Google Calendar. With just a few clicks, you can manage your academic schedule and ensure you never miss a class or event.

## 🚀 Features

- **Easy Schedule Import**: Quickly import your schedule from various sources.
- **Google Calendar Integration**: Export your schedule directly to Google Calendar.
- **Chrome Extension**: Extract your schedule from websites using our Chrome extension.

## 🛠️ Technologies Used

- **Frontend**: 
  - ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
  - ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  - ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
  - ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Backend**: 
  - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  - ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
  - ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

- **APIs**: 
  - ![Google Calendar API](https://img.shields.io/badge/Google_Calendar_API-4285F4?style=for-the-badge&logo=google-calendar&logoColor=white)

- **Chrome Extension**: 
  - ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

## 📂 Project Structure

### Frontend

The frontend is built using React and Vite, with Material-UI and Tailwind CSS for styling.

#### Key Files:
- `src/components/Schedule.jsx`: Handles schedule fetching and Google Calendar integration.
  ```javascript:frontend/front/src/components/Schedule.jsx
  startLine: 1
  endLine: 368
  ```
- `src/components/Home.jsx`: The home page of the application.
  ```javascript:frontend/front/src/components/Home.jsx
  startLine: 1
  endLine: 86
  ```
- `src/components/Extension.jsx`: Information about the Chrome extension.
  ```javascript:frontend/front/src/components/Extension.jsx
  startLine: 1
  endLine: 33
  ```
- `src/App.jsx`: Main application component with routing.
  ```javascript:frontend/front/src/App.jsx
  startLine: 1
  endLine: 43
  ```

### Backend

The backend is built using Node.js, Express, and MongoDB.

#### Key Files:
- `routes/userRoutes.js`: Handles user-related routes and operations.
  ```javascript:backend/routes/userRoutes.js
  startLine: 1
  endLine: 100
  ```
- `routes/courseRoutes.js`: Handles course-related routes and operations.
  ```javascript:backend/routes/courseRoutes.js
  startLine: 8
  endLine: 133
  ```
- `models/userModel.js`: Mongoose schema for user data.
  ```javascript:backend/models/userModel.js
  startLine: 1
  endLine: 19
  ```
- `models/course.js`: Mongoose schema for course data.
  ```javascript:backend/models/course.js
  startLine: 1
  endLine: 25
  ```

### Chrome Extension

The Chrome extension helps extract schedule data from websites.

#### Key Files:
- `popup.js`: Handles the extension's popup logic.
  ```javascript:CD Extension/popup.js
  startLine: 1
  endLine: 115
  ```
- `popup.html`: The HTML for the extension's popup.
  ```html:CD Extension/popup.html
  startLine: 1
  endLine: 175
  ```
- `manifest.json`: Configuration for the Chrome extension.
  ```json:CD Extension/manifest.json
  startLine: 1
  endLine: 23
  ```

## 📦 Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/schedule2calendar.git
   cd schedule2calendar
   ```

2. **Install dependencies**:
   ```sh
   cd frontend/front
   npm install
   cd ../../backend
   npm install
   ```

3. **Run the frontend**:
   ```sh
   cd frontend/front
   npm run dev
   ```

4. **Run the backend**:
   ```sh
   cd backend
   npm start
   ```

5. **Load the Chrome extension**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `CD Extension` folder

## 📚 Usage

1. **Sign up or log in** to the application.
2. **Import your schedule** using the Chrome extension or manually.
3. **Export your schedule** to Google Calendar with a single click.

## 📝 License

This project is licensed under the MIT License.


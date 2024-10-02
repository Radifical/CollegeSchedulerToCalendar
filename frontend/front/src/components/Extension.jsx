import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Extension = () => {
  return (
    <Container className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <Typography variant="h4" className="text-white mb-4 glow-text">Get Started</Typography>
      <Typography variant="body1" className="text-gray-400 mb-6">
        Our Chrome extension helps you extract your schedule from various websites and view it on our platform. You can also export your schedule to Google Calendar for easy access and management.
      </Typography>
      <Typography variant="h5" className="text-white mb-4 glow-text">Steps to Download and Use the Extension</Typography>
      <List>
        {[
          'Go to the Chrome Web Store.',
          "Search for 'Schedule Extractor'.",
          "Click 'Add to Chrome' to install the extension.",
          "Once installed, click on the extension icon in the Chrome toolbar.",
          "Log in with your account credentials.",
          'Navigate to the website from which you want to extract your schedule.',
          "Click the 'Extract Schedule' button in the extension popup.",
          'View your extracted schedule on our platform and export it to Google Calendar.',
          'Enjoy managing your schedule with ease!',
        ].map((step, index) => (
          <ListItem key={index} className="hover:bg-gray-800 rounded transition-all">
            <ListItemText primary={step} className="text-gray-300" />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Extension;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import Extension from './Extension';

const Home = () => {
  return (
    <Container maxWidth="md" className="text-center mt-8 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
      <Typography variant="h2" className="text-white mb-4 glow-text">
        📅 Schedule ➡️ Google Calendar
      </Typography>
      <Typography variant="h5" className="text-gray-400 mb-8">
        Easily manage your schedule and export it to Google Calendar. 📆
      </Typography>
      <Box mt={4}>
        <Link to="/login" className="text-decoration-none">
          <Button variant="contained" className="button mr-4">
            🔑 Login
          </Button>
        </Link>
        <Typography variant="h4" className="text-white mb-4 glow-text">-</Typography>
        <Link to="/signup" className="text-decoration-none">
          <Button variant="outlined" className="button">
            📝 Signup
          </Button>
        </Link>
      </Box>

      {/* Features Section */}
      <Box my={8}>
        <Typography variant="h4" className="text-white mb-4 glow-text">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <Typography variant="h5" className="mb-2">🔍 Easy Search</Typography>
                <Typography variant="body1" className="text-gray-400">Quickly find and manage your events with our powerful search feature.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <Typography variant="h5" className="mb-2">🔔 Reminders</Typography>
                <Typography variant="body1" className="text-gray-400">Set reminders for your events and never miss an important date.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <Typography variant="h5" className="mb-2">📤 Export</Typography>
                <Typography variant="body1" className="text-gray-400">Easily export your schedule to Google Calendar with a single click.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="bg-gray-800 text-white">
              <CardContent>
                <Typography variant="h5" className="mb-2">📱 Mobile Friendly</Typography>
                <Typography variant="body1" className="text-gray-400">Access and manage your schedule on the go with our mobile-friendly design.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

    

      {/* Call to Action Section */}
      <Box my={8}>
        <Typography variant="h4" className="text-white mb-4 glow-text"></Typography>
        <Typography variant="body1" className="text-gray-400 mb-6"></Typography>
        <Link to="/signup" className="text-decoration-none">
          <Button variant="contained" className="button">
            📝 Signup Now
          </Button>
        </Link>
      </Box>

      <Extension />
    </Container>
  );
};

export default Home;
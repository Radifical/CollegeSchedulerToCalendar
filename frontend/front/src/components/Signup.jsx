import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/newUser', { username, password });
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed');
    }
  };

  return (
    <Container maxWidth="sm" className="signup-container">
      <Box component="form" onSubmit={handleSignup} className="signup-box">
        <Typography variant="h4" className="text-black mb-4">Signup</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
          margin="normal"
          className="bg-white text-black border-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
          className="bg-white text-black border-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <Button type="submit" variant="contained" className="bg-blue-600 hover:bg-blue-500 text-white w-full mt-4">
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      setUser(response.data);
      navigate(`/schedule?userId=${response.data.id}`);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box component="form" onSubmit={handleLogin} className="login-box">
        <Typography variant="h4" className="text-black mb-4">Login</Typography>
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
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

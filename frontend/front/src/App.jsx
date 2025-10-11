import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Schedule from './components/Schedule';
import Extension from './components/Extension';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Privacy from './components/Privacy';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
};

const AppContent = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/schedule?userId=${user.id}`);
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/schedule" element={user ? <Schedule user={user} /> : <p>Please log in to see your schedule.</p>} />
      <Route path="/extension" element={<Extension />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default App;
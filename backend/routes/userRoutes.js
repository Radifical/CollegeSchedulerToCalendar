const express = require('express');
const Acc = require('../models/userModel');
const router = express.Router();

//TODO RAdif -make this accept the array, make a post to make new user 
router.post('/newUser', async (req, res) =>{

    try {
        const {username, password} = req.body;
        const newUser = new Acc({
            username,
            password
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

})

router.put('/:id/newSchedule', async (req, res) => {
  try {
    const { id } = req.params;
    const { courseName, times } = req.body;  // Extract course details from the request body

    // Find the user by ID
    const user = await Acc.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the course already exists in the user's schedule
    const existingCourse = user.schedule.find((course) => course.courseName === courseName);

    if (existingCourse) {
      // If the course exists, add new times to the existing course
      existingCourse.times.push(...times);  // Append the new times array
    } else {
      // If the course does not exist, add a new course to the schedule
      user.schedule.push({ courseName, times });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'User schedule updated successfully', user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


  router.get('/allUser', async (req, res) => {
    try {
      const users = await Acc.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/user/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Acc.findById(id).populate('schedule');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      console.log('User schedule:', user.schedule); // Debugging log
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username
      const user = await Acc.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the password matches (You might want to hash passwords in a real app)
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // On successful login, return user details (without password)
      res.status(200).json({ id: user._id, username: user.username, schedule: user.schedule });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;

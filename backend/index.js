require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api', courseRoutes)
app.use('/api', userRoutes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const mongoose = require('mongoose');
const Acc = require('./userModel');

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    //course name
    required: true,
  },
  times: [
    {
      day: String,
      time: String,
      dates: String,
      location: String,
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Acc',
    required: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);

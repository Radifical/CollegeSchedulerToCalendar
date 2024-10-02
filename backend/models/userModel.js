const mongoose = require('mongoose');
const accSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  schedule: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});
          time: String,
module.exports = mongoose.model('Acc', accSchema);
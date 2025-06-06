const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  username: { type: String, required: true },
  profilePic: { type: String },
});

module.exports = mongoose.model('User', userSchema);

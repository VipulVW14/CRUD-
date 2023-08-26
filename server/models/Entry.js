const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  hobbies: String,
});

module.exports = mongoose.model('Entry', entrySchema);

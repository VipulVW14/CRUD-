const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  name,
  phoneNumber,
  email,
  hobbies,
});

module.exports = mongoose.model('Entry', entrySchema);

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  crop: String,
  cropStage: String,
  irrigationPractice: String,
  soilType: String,
  address2: String,
  city: String,
  state: String,
  zip: String
});

module.exports = mongoose.model('Form', formSchema);

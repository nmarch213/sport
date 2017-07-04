const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const Organization = new Schema({
  name: String,
  president: String,
  email: String,
  address: String,
  phoneNumber: Number,
  website: String,
  Teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  }],
});

module.exports = mongoose.model('Organization', Organization);

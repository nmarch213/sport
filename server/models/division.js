const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const Division = new Schema({
  name: String,
  ageRange: String,
  weightRange: String,
  Teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  }],
  Games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  }],
});

module.exports = mongoose.model('Division', Division);

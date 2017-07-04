const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const Team = new Schema({
  name: String,
  division: String,
  playerRoster: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  }],
  coachRoster: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
  }],
});

module.exports = mongoose.model('Team', Team);

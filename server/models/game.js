const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const Game = new Schema({
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  homeScore: Number,
  away: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  awayScore: Number,
  date: Date,
  startTime: String,
  currentTime: String,
  location: String,
});

module.exports = mongoose.model('Game', Game);

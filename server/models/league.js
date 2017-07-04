const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const League = new Schema({
  name: String,
  Seasons: [
    {
      year: String,
      Organizations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
      }],
      Divisions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Division',
      }],
    },
  ],
  sport: String,
});

module.exports = mongoose.model('League', League);

const mongoose = require('mongoose');
const winston = require('winston');

// Models
const League = require('../models/league');

module.exports = {

  /**
   * This will add a new League to the Database
   * @param  {[String]} name  [The Name of the League]
   * @param  {[String]} sport [The sport the league is playing]
   * @param  {[Number]} year  [The season year]
   * @return {[type]}       [description]
   */
  addNewLeague(name, sport) {
    const newLeague = {
      name,
      sport,
    };

    League.create(newLeague, (err, addedLeague) => {
      if (err) {
        winston.error('Adding a new League has failed ' + err);
        return;
      }
      winston.info(addedLeague.name + ' has been added!');
    });
  },
};

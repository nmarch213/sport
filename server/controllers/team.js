const mongoose = require('mongoose');
const winston = require('winston');

// Models
const Organization = require('../models/organization');

module.exports = {

  addNewOrganization(name, president, email, address, phoneNumber, website) {
    const newOrg = {
      name,
      president,
      email,
      address,
      phoneNumber,
      website,
    };

    Organization.create(newOrg, (err, addedOrg) => {
      if (err) {
        winston.error('Adding a new Org has failed ' + err);
        return;
      }

      winston.info(addedOrg.name + ' has been added!');
    });
  },
};

'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Species = db.define('species', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  kingdom: {
    type: Sequelize.STRING
  },
  phylum: {
    type: Sequelize.STRING
  },
  class: {
    type: Sequelize.STRING
  },
  order: {
    type: Sequelize.STRING
  },
  family: {
    type: Sequelize.STRING
  },
  genus: {
    type: Sequelize.STRING
  },
  imageURL: {
    type: Sequelize.STRING
  }
});

module.exports = Species;
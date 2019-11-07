const knex = require('knex');

const config = '../knexfile.js';

module.exports = knex(config.development);

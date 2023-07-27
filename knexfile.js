// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const parse = require('pg-connection-string').parse;
const knex = require('knex');


// Your connection string
const connectionString = 'postgres://stretch_api_user:qglo1a2QR0rHymJYVuOrNukbtPVf5oWi@dpg-cj18kmk07spjv9r3q3b0-a.oregon-postgres.render.com/stretch_api';

// Parse the connection string to get the individual connection parameters
const dbConfig = parse(connectionString);

const db = knex({
  development: {
    client: 'pg',
    connection: {
      host: dbConfig.host,
      database: dbConfig.database,
      user: dbConfig.user,
      password: dbConfig.password,
      port: dbConfig.port,
      ssl: {
        rejectUnauthorized: false // Set to true to reject unauthorized connections (if necessary)
        // Other SSL options can be added here if required by your provider
      }
    },
    migrations: {
      directory: './db/migrations' 
      // where are we going to store our migrations
      // make initial migration with the command: knex migrate:make initial
    },
    seeds: {
      directory: './db/seeds/dev'
      // make a seed file with: knex seed:make papers
    },
    useNullAsDefault: true
    // takes any undefined keys or values and sets them to null
  
  },
});

module.exports = db;

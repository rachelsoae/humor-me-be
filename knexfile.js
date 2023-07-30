// knexfile.js //

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const parse = require('pg-connection-string').parse;

const connectionString = 'postgres://stretch_api_user:qglo1a2QR0rHymJYVuOrNukbtPVf5oWi@dpg-cj18kmk07spjv9r3q3b0-a.oregon-postgres.render.com/stretch_api';

const dbConfig = parse(connectionString);

module.exports = {
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
      }
    },
    migrations: {
      directory: './db/migrations' 
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      host: dbConfig.host,
      database: dbConfig.database,
      user: dbConfig.user,
      password: dbConfig.password,
      port: dbConfig.port,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: './db/migrations' 
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true  
  },
};
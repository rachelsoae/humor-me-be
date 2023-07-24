// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stretch',
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
};
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://stretch_be_user:Iy0WtPs3J2sTwLNclmfBsQdWaADgkFGv@dpg-cj0s482ip7vkfo4m4a0g-a.oregon-postgres.render.com/stretch_be',
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
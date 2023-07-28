/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const postersData = require('../../../data/postersData.js')

const createPosters = (knex, poster) => {
  const posterId = knex('posters').insert({
    quote: JSON.stringify(poster.quote),
    src: poster.src
  }, 'id')
  return posterId;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posters').truncate()

  let posterPromises = postersData.map(poster => {
    return createPosters(knex, poster);
  })

  return Promise.all(posterPromises)
};

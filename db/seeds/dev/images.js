/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const imagesData = require('../../../data/imagesData.js')

const createImages = (knex, image) => {
  const imageId = knex('images').insert({ image_src: image.image }, 'id')
  return imageId;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('images').truncate()

  let imagePromises = imagesData.map(image => {
    return createImages(knex, image);
  })

  return Promise.all(imagePromises)
};


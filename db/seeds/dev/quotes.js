/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const quotesData = require('../../../data/quotesData.js')

const createQuotes = (knex, quote) => {
  const quoteId = knex('quotes').insert({
    quote: quote.quote,
    category: quote.category
  }, 'id')
  return quoteId;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quotes').truncate()

  let quotePromises = quotesData.map(quote => {
    return createQuotes(knex, quote);
  })
  console.log(quotePromises[0])

  return Promise.all(quotePromises)
};

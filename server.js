const express = require('express');
const app = express();
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Humor Me';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.get('/api/v1/quotes', async (request, response) => {
  try {
    const quotes = await database('quotes').select();
    response.status(200).json({quotes});
  } catch(error) {
    response.status(500).json({error})
  }
});

app.get('/api/v1/images', async (request, response) => {
  try {
    const images = await database('images').select();
    response.status(200).json(images);
  } catch(error) {
    response.status(500).json({error})
  }
});

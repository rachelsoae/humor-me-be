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

app.get('/api/v1/quotes/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const quote = await database('quotes').where({ id }).first();

    if (!quote) {
      return response.status(404).json({ error: 'Quote not found!'})
    }

    response.status(200).json(quote);
  } catch(error) {
    response.status(500).json({error})
  }
});

app.post('/api/v1/quotes', async (request, response) => {
  try {
    const { quote, type } = request.body;
    
    await database('quotes').insert({ quote, type });
    
    const lastRow = await database('quotes').select('id').orderBy('id', 'desc').first();

    response.status(201).json({ message: 'Quote saved successfully', quote: { id: lastRow.id, quote, type } });
  } catch(error) {
    response.status(422).json({error})
  }
});

app.delete('/api/v1/quotes/:id', async (request, response) => {
  try {
    const { id } = request.params;
    
    await database('quotes').where({ id }).del();
    response.status(200).json({ message: 'Quote deleted successfully' });
  } catch(error) {
    response.status(422).json({error})
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

app.get('/api/v1/images/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const image = await database('images').where({ id }).first();

    if (!image) {
      return response.status(404).json({ error: 'Image not found!'})
    }

    response.status(200).json(image);
  } catch(error) {
    response.status(500).json({error})
  }
});

app.post('/api/v1/images', async (request, response) => {
  try {
    const { image } = request.body;
    
    await database('images').insert({ image });
    
    const lastRow = await database('images').select('id').orderBy('id', 'desc').first();

    response.status(201).json({ message: 'Image saved successfully', image: { id: lastRow.id, image } });
  } catch(error) {
    response.status(422).json({error})
  }
});

app.delete('/api/v1/images/:id', async (request, response) => {
  try {
    const { id } = request.params;
    
    await database('images').where({ id }).del();
    response.status(200).json({ message: 'Image deleted successfully' });
  } catch(error) {
    response.status(422).json({error})
  }
});

app.get('/api/v1/posters', async (request, response) => {
  try {
    const posters = await database('posters').select();
    response.status(200).json(posters);
  } catch(error) {
    response.status(500).json({error})
  }
});

app.get('/api/v1/posters/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const poster = await database('posters').where({ id }).first();

    if (!poster) {
      return response.status(404).json({ error: 'Poster not found!'})
    }

    response.status(200).json(poster);
  } catch(error) {
    response.status(500).json({error})
  }
});

app.post('/api/v1/posters', async (request, response) => {
  try {
    const { quote, type, image } = request.body;
    
    await database('posters').insert({ quote, type, image });

    const lastRow = await database('posters').select('id').orderBy('id', 'desc').first();

    response.status(201).json({ message: 'Poster saved successfully', poster: { id: lastRow.id, quote, type, image } });
  } catch(error) {
    response.status(422).json({error})
  }
});

app.delete('/api/v1/posters/:id', async (request, response) => {
  try {
    const { id } = request.params;
    
    await database('posters').where({ id }).del();
    response.status(200).json({ message: 'Poster deleted successfully' });
  } catch(error) {
    response.status(422).json({error})
  }
});
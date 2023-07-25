const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Humor Me';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.locals.quotes = [
  { id: 1, quote: `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`, type: "wholesome" },
  { id: 2, quote: `"Believe you can and you're halfway there." - Theodore Roosevelt`, type: "chaotic" },
  { id: 3, quote: `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`, type: "wholesome" }
];

app.get('/api/v1/quotes', (request, response) => {
  const quotes = app.locals.quotes;

  response.json({ quotes });
});

app.locals.images = [
  { id: 1, src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80" },
  { id: 2, src: "https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" },
  { id: 3, src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80" }
];

app.get('/api/v1/images', (request, response) => {
  const images = app.locals.images;

  response.json({ images });
});

app.locals.posters = [
  { id: 1, quote: { text: `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`, type: "wholesome" }, src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80" },
  { id: 2, quote: { text: `"Believe you can and you're halfway there." - Theodore Roosevelt`, type: "chaotic" }, src: "https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" },
  { id: 3, quote: { text: `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`, type: "wholesome" }, src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80" }
]

app.get('/api/v1/posters', (request, response) => {
  const posters = app.locals.posters;

  response.json({ posters });
});

app.post('/api/v1/posters', (request, response) => {
  const id = Date.now();
  const { quote, type, src } = request.body;
  const newPoster = { id, quote: { text: quote, type }, src }

  for (let requiredParameter of ['quote', 'type', 'src']) {
    if (!request.body[requiredParameter]) {
      return response.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }
  
  app.locals.posters.push(newPoster);
  response.status(201).json(newPoster);
})
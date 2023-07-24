const express = require('express');
const app = express();

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
})
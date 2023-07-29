# Humor Me API
This repo was created to serve as the backend for the [Humor Me](https://github.com/rachelsoae/stretch-fe) project.

## Deployed Pages
[Quotes](https://stretch-api.onrender.com/api/v1/quotes) | [Images](https://stretch-api.onrender.com/api/v1/images) | [Posters](https://stretch-api.onrender.com/api/v1/posters)

## Set Up
Clone this down, and `cd` into it.  Then run:

`npm i`

`nodemon server.js`

## Endpoints
All API endpoints (also known as "routes") are prefixed with `https://stretch-api.onrender.com/api/v1`. Wherever you see a `:quote_id`, `:image_id`, or `poster_id` in the endpoint documentation, that would be replaced by the ID *value* in your request, like `1`, for instance. Here are the endpoints available:

| Purpose | URL | Method | Request Body | Sample Successful Response |
| --- | --- | --- | --- | --- |
| Get all quotes | `/quotes` | GET | N/A | All quotes in database |
| Get a single quote | `/quotes/:id` | GET | N/A | The quote corresponding to the id sent in the URL |
| Get all images | `/images` | GET | N/A | All images in database |
| Get a single image | `/images/:id` | GET | N/A | The image corresponding to the id sent in the URL |
| Get all posters | `/posters` | GET | N/A | All posters in database |
| Get a single poster | `/posters/:id` | GET | N/A | The poster corresponding to the id sent in the URL |
| Submit a new quote | `/quotes` | POST | `{ quote: <String>, type: <String> }` | `{ message: 'Quote saved successfully', quote: { id: 1, quote: 'example', type: 'wholesome' } }` |
| Submit a new image | `/images` | POST | `{ image_src: <String> }` | `{ message: 'Image saved successfully', image: { id: 1, image_src: 'example.com' } }` |
| Submit a new poster | `/posters` | POST | `{ quote: <String>, type: <String>, src: <String> }` | `{ message: 'Poster saved successfully', poster: { id: 1, quote: 'example', type: 'wholesome', src: 'example.com' } }` |
| Delete an existing quote | `/quotes/:id` | DELETE | N/A | `{ message: 'Quote deleted successfully' }` |
| Delete an existing image | `/images/:id` | DELETE | N/A | `{ message: 'Image deleted successfully' }` |
| Delete an existing poster | `/posters/:id` | DELETE | N/A | `{ message: 'Poster deleted successfully' }` |

## Contributors
- [Jamie Caudill](https://github.com/JamieCaudill)
- [Daniel Cochico](https://github.com/dcochico)
- [Rachel Soae Prather](https://github.com/rachelsoae)
- [Alexa VanSchaardenburg](https://github.com/AlexaVanSchaardenburg)
# Humor Me API
This repo was created to serve as the backend for the [Humor Me](https://github.com/rachelsoae/stretch-fe) project.
The purpose of this project was to teach ourselves a brand new technology. As Front End Developers, we chose to challenge ourselves by learning to write a back end from scratch using Express.js, Knex.js, and PostgreSQL. 

## Deployed Pages
[Quotes](https://stretch-api.onrender.com/api/v1/quotes) | [Images](https://stretch-api.onrender.com/api/v1/images) | [Posters](https://stretch-api.onrender.com/api/v1/posters)

## Set Up
1. Clone down this repo
2. `cd` into the new directory
2. Install dependencies using `npm i`
3. To fire up the server, run `node server.js` or `nodemon server.js`

## Endpoints
All API endpoints (also known as "routes") are prefixed with `https://stretch-api.onrender.com/api/v1`. Wherever you see a `:quote_id`, `:image_id`, or `:poster_id` in the endpoint documentation, it will be replaced by the ID *value* in your request (for example, `1`).

| Purpose | URL | Method | Request Body | Sample Successful Response |
| --- | --- | --- | --- | --- |
| Get all quotes | `/quotes` | GET | N/A | Array of all quotes in database: `[{id: 1, quote: 'example-quote', type: 'wholesome'} ... ]` |
| Get a single quote | `/quotes/:id` | GET | N/A | Object with quote corresponding to id: `{id: 1, quote: 'example-quote', type: 'wholesome}` |
| Get all images | `/images` | GET | N/A | Array of all images in database: `[{id: 3, image: 'example.com/example-image'} ... ]`  |
| Get a single image | `/images/:id` | GET | N/A | Object with image corresponding to id: `{id: 3, image: 'example.com/example-image'}` | 
| Get all posters | `/posters` | GET | N/A | Array of all posters in database: `[{id: 4, quote: 'example-quote', type: 'wholesome' image: 'example.com/example-image'} ... ]` |
| Get a single poster | `/posters/:id` | GET | N/A | Object with poster corresponding to id: `{id: 4, quote: 'example-quote', type: 'wholesome' image: 'example.com/example-image'}` |
| Submit a new quote | `/quotes` | POST | `{ quote: <String>, type: <String> }` | `{ message: 'Quote saved successfully', quote: { id: 1, quote: 'example-quote', type: 'wholesome' } }` |
| Submit a new image | `/images` | POST | `{ image: <String> }` | `{ message: 'Image saved successfully', image: { id: 1, image: 'example.com/example-image' } }` |
| Submit a new poster | `/posters` | POST | `{ quote: <String>, type: <String>, image: <String> }` | `{ message: 'Poster saved successfully', poster: { id: 1, quote: 'example-quote', type: 'wholesome', image: 'example.com/example-image' } }` |
| Delete an existing quote | `/quotes/:id` | DELETE | N/A | `{ message: 'Quote deleted successfully' }` |
| Delete an existing image | `/images/:id` | DELETE | N/A | `{ message: 'Image deleted successfully' }` |
| Delete an existing poster | `/posters/:id` | DELETE | N/A | `{ message: 'Poster deleted successfully' }` |

* Any error responses will return an error message.

## Contributors
- [Jamie Caudill](https://github.com/JamieCaudill)
- [Daniel Cochico](https://github.com/dcochico)
- [Rachel Soae Prather](https://github.com/rachelsoae)
- [Alexa VanSchaardenburg](https://github.com/AlexaVanSchaardenburg)

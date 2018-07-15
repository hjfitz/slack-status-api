const express = require('express');
const scrape = require('./scraper');

const api = express();

api.get('/', (req, res) => scrape().then(status => res.json(status)));

api.listen(process.env.PORT || 5000, async () => {
  console.log('api listening on', process.env.PORT);
  // initialise a cache here
});
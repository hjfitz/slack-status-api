const express = require('express');
const scrape = require('./scraper');

const api = express();

let cached = { status: 'Scraper not initialised' };

api.get('/v1', async (req, res) => {
  res.json(cached);
  const scraped = await scrape();
  cached = scraped;
});

api.listen(process.env.PORT || 5000, async () => {
  cached = await scrape();
  console.log('api listening on', (process.env.PORT || 5000));
});
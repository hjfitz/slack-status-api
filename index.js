const express = require('express');

const api = express();

api.get('/', (req, res) => {

});

api.listen(process.env.PORT || 5000, async () => {
  console.log('api listening on', process.env.PORT);
  // initialise a cache here
});
const express = require('express');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', require('./products.router'));

  router.get('/', (req, res) => {
    res.send('API V1 is online');
  });
}

module.exports = routerApi;

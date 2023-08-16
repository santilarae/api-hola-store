const express = require('express');
const config = require('./config');
const routerApi = require('./routes');

const app = express();
app.use(express.json());

routerApi(app);

app.listen(config.port, () => {
  console.log('Running on http://localhost:' + config.port);
});

const express = require('express');
const config = require('./config');
const routerApi = require('./routes');
const {
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();
app.use(express.json());

routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('Running on http://localhost:' + config.port);
});

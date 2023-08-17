const express = require('express');
const cors = require('cors');
const config = require('./config');
const routerApi = require('./routes');
const {
  boomErrorHandler,
  errorHandler,
  sequelizeErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
app.use(express.json());

const whitelist = [
  'http://localhost',
  'https://hola-store.vercel.app',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));

routerApi(app);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('Running on http://localhost:' + config.port);
});

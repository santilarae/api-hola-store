const { ValidationError } = require('sequelize');

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, res, res, next) {
  if (err.isBoom) {
    res.status(err.output.statusCode).json(err.output.payload);
  } else {
    next(err);
  }
}

function sequelizeErrorHandler(err, res, res, next) {
  if (err instanceof ValidationError) {
    const message = err.errors.map(err => err.message).join(', ');
    res.status(409).json({
      statusCode: 409,
      error: err.name,
      message
    });
  } else {
    next(err);
  }
}

module.exports = { errorHandler, boomErrorHandler, sequelizeErrorHandler };

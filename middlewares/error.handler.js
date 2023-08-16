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

module.exports = { errorHandler, boomErrorHandler };

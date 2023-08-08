export const globalErrorHandler = (err, req, res, next) => {
  const errorStatus = err.status || 'error';
  const errorMessage = err.message || 'An error has occurred';
  const errorStatusCode = err.statusCode || 500;
  return res.status(errorStatusCode).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};

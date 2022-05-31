import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  switch (error.name) {
    default:
      res.status(401).json({ error: error.message as string });
  }

  next(error);
};

export default errorHandler;

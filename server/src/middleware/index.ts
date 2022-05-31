import { NextFunction, RequestHandler } from 'express';

export const unknownEndpoint: RequestHandler = (_req, res) => {
  res.status(404).json({ error: 'Unknown Endpoint' });
};

export const isAuth: RequestHandler = (req, res, next: NextFunction) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(403).json({ error: 'Please login' });
  }
};

export * from './error';

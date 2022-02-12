import { ErrorRequestHandler } from 'express';
import ErrorResponse from '../utils/custom-error';

export const customErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ErrorResponse) {
    res.status(error.status || 500).json(error.getErrorResponse());
  } else {
    res.status(500).json({ message: error.message });
  }
};

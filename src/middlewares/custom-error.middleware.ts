import { ErrorRequestHandler } from 'express';
import ErrorResponse from '../utils/custom-error';
import { StatusCodes } from 'http-status-codes';
export const customErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ErrorResponse) {
    res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json(error.getErrorResponse());
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

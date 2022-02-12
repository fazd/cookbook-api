import { RequestHandler } from 'express';
import { Schema } from 'joi';

export const validSchema = (schema: Schema): RequestHandler => {
  return (req, res, next) => {
    const { body } = req;
    const { error } = schema.validate(body);

    if (error) {
      throw new Error(error?.message);
    }
    next();
  };
};

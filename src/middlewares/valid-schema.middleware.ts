import { RequestHandler } from 'express';
import { DtoType } from '../interfaces/IDto.interface';

export const validSchema = (dto: DtoType): RequestHandler => {
  return (req, res, next) => {
    const { body, params, query } = req;

    if (dto.body) {
      const { error } = dto.body.validate(body);
      if (error) {
        throw new Error(error?.message);
      }
    }

    if (dto.params) {
      const { error } = dto.params.validate(params);
      if (error) {
        throw new Error(error?.message);
      }
    }

    if (dto.query) {
      const { error } = dto.query.validate(query);
      console.log('error', error);
      if (error) {
        throw new Error(error?.message);
      }
    }

    next();
  };
};

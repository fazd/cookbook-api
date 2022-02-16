import { RequestHandler } from 'express';
import { DtoType } from '../interfaces/IDto.interface';
import ErrorResponse from '../utils/custom-error';
import { StatusCodes } from 'http-status-codes';

export const validSchema = (dto: DtoType): RequestHandler => {
  return (req, res, next) => {
    const { body, params, query } = req;

    if (dto.body) {
      const { error } = dto.body.validate(body);
      if (error) {
        throw new ErrorResponse({
          message: error?.message,
          status: StatusCodes.BAD_REQUEST,
          code: 'body failed',
        });
      }
    }

    if (dto.params) {
      const { error } = dto.params.validate(params);
      if (error) {
        throw new ErrorResponse({
          message: error?.message,
          status: StatusCodes.BAD_REQUEST,
          code: 'params failed',
        });
      }
    }

    if (dto.query) {
      const { error } = dto.query.validate(query);
      console.log('error', error);
      if (error) {
        throw new ErrorResponse({
          message: error?.message,
          status: StatusCodes.BAD_REQUEST,
          code: 'query failed',
        });
      }
    }

    next();
  };
};

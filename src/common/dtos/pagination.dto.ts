import Joi from 'joi';
import { DtoType } from '../../interfaces/IDto.interface';

export const paginationDto: DtoType = {
  query: Joi.object({
    limit: Joi.number().min(1).optional(),
    page: Joi.number().min(1).optional(),
    orderBy: Joi.valid('ASC', 'DESC').optional(),
    sortBy: Joi.string().optional(),
  }),
};

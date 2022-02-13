import Joi from 'joi';
import { paginationDto } from '../../../../common/dtos/pagination.dto';
import { DtoType } from '../../../../interfaces/IDto.interface';

export const createRecipeDto: DtoType = {
  body: Joi.object({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    image: Joi.string().trim().required(),
  }),
};

export const updateRecipeDto: DtoType = {
  body: Joi.object({
    title: Joi.string().trim().optional(),
    description: Joi.string().trim().optional(),
    image: Joi.string().trim().optional(),
  }),
  params: Joi.object({
    id: Joi.string().trim().required(),
  }),
};

export const deleteRecipeDto: DtoType = {
  params: Joi.object({
    id: Joi.string().trim().required(),
  }),
};

export const getRecipeDto: DtoType = {
  ...paginationDto,
};

import Joi from 'joi';
import { DtoType } from '../../../../interfaces/IDto.interface';

export const loginDto: DtoType = {
  body: Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
  }),
};

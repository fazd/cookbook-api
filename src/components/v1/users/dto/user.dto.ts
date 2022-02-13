import Joi from 'joi';
import { DtoType } from '../../../../interfaces/IDto.interface';

export const createUserDto: DtoType = {
  body: Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    password: Joi.string().min(6).required(),
  }),
};

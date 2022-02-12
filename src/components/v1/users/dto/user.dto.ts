import Joi from 'joi';

export const createUserDto = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  password: Joi.string().min(6).required(),
});

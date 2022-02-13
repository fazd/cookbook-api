import { Router } from 'express';
import userRouter from './users/routes';
import authRouter from './auth/routes';
import recipeRouter from './recipes/routes';
const v1Router = Router();

v1Router.use('/users', userRouter);
v1Router.use('/auth', authRouter);
v1Router.use('/recipes', recipeRouter);

export default v1Router;

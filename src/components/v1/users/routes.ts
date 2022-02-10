import { Router } from 'express';
import { UserController } from './controllers/user.controller';

const userController = new UserController();
const userRouter = Router();

userRouter.route('/').post(userController.create);

export default userRouter;

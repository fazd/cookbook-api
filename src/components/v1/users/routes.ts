import { Router } from 'express';
import { validSchema } from '../../../middlewares/valid-schema.middleware';
import { UserController } from './controllers/user.controller';
import { createUserDto } from './dto/user.dto';

const userController = new UserController();
const userRouter = Router();

userRouter.route('/').post(validSchema(createUserDto), userController.create);

export default userRouter;

import { Router } from 'express';
import { validSchema } from '../../../middlewares/valid-schema.middleware';
import { AuthController } from './controllers/auth.controller';
import { loginDto } from './dto/auth.dto';

const authController = new AuthController();
const userRouter = Router();

userRouter.route('/').post(validSchema(loginDto), authController.login);

export default userRouter;

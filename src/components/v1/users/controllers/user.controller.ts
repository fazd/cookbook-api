import { RequestHandler } from 'express';
import { UserService } from '../services/user.service';
import { StatusCodes } from 'http-status-codes';

export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  create: RequestHandler = async (req, res, next) => {
    const { body } = req;
    try {
      const user = await this.userService.create(body as CreateUser);
      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      next(error);
    }
  };
}

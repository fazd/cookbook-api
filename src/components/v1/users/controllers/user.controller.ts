import { RequestHandler } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  create: RequestHandler = async (req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body } = req;
    try {
      const user = await this.userService.create(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };
}

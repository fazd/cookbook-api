import { RequestHandler } from 'express';
import { AuthService } from '../services/auth.service';
import { StatusCodes } from 'http-status-codes';

export class AuthController {
  private readonly authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login: RequestHandler = async (req, res, next) => {
    const { body } = req;

    try {
      const login = await this.authService.login(body as LoginCredentials);
      res.status(StatusCodes.OK).json(login);
    } catch (error) {
      next(error);
    }
  };

  me: RequestHandler = async (req, res, next) => {
    const { auth } = req;
    try {
      const user = await this.authService.me(auth.id);
      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      next(error);
    }
  };
}

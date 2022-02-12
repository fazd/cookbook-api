import { RequestHandler } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private readonly authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login: RequestHandler = async (req, res, next) => {
    const { body } = req;

    try {
      const login = await this.authService.login(body as LoginCredentials);
      res.status(200).json(login);
    } catch (error) {
      next(error);
    }
  };
}

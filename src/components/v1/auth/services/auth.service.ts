import bcrypt from 'bcrypt';
import { authErrors } from '../../../../errors/auth.error';
import { userErrors } from '../../../../errors/user.error';
import { generateAuthToken } from '../../../../utils/jwt';
import { UserService } from '../../users/services/user.service';

export class AuthService {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async login(loginCredential: LoginCredentials): Promise<JwtToken | null> {
    const { email, password } = loginCredential;

    const user = await this.userService.getByEmail(email);
    if (!user) {
      throw userErrors.userNotFound(email);
    }
    const { id } = user;
    const isEqualPass = await bcrypt.compare(password, user.password);

    if (isEqualPass) {
      const token = generateAuthToken(id, email);
      return token;
    }

    throw authErrors.incorrectLogin(email);
  }

  async me(userId: string): Promise<User> {
    const user = await this.userService.get(userId);

    if (!user) {
      throw userErrors.userNotFound(userId);
    }
    return user;
  }
}

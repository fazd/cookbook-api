import bcrypt from 'bcrypt';
import { authErrors } from '../../../../errors/auth.error';
import { userErrors } from '../../../../errors/user.error';
import { generateAuthToken } from '../../../../utils/jwt';
import { UserService } from '../../users/services/user.service';

const userService = new UserService();

export class AuthService {
  async login(loginCredential: LoginCredentials): Promise<JwtToken | null> {
    const { email, password } = loginCredential;

    const user = await userService.getByEmail(email);
    if (!user) {
      throw userErrors.userNotFound(email);
    }

    const { id } = user;
    console.log('user', user);

    const isEqualPass = await bcrypt.compare(password, user.password);

    console.log('hashPassword', isEqualPass);

    if (isEqualPass) {
      const token = generateAuthToken(id, email);
      return token;
    }

    throw authErrors.incorrectLogin(email);
  }
}

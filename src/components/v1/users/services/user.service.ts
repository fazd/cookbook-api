import { userErrors } from '../../../../errors/user.error';
import { UserDao } from '../dao/user.dao';
import bcrypt from 'bcrypt';

export class UserService {
  private readonly userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  async create(createUser: CreateUser): Promise<User> {
    const { email, password } = createUser;

    const hash = await bcrypt.hash(password, 5);

    const existingUser = await this.userDao.findOne(email);
    if (existingUser) {
      throw userErrors.duplicateAccount(email);
    }

    return await this.userDao.save({ ...createUser, password: hash });
  }

  async get(userId: string): Promise<User | null> {
    const user = await this.userDao.findByPk(userId);
    return user;
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.userDao.findOne(email);
    return user;
  }
}

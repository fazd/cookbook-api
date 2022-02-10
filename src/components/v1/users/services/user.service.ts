import { userErrors } from '../../../../errors/user.error';
import { UserDao } from '../dao/user.dao';

export class UserService {
  private readonly userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  async create(createUser: CreateUser): Promise<User> {
    const { email } = createUser;

    const existingUser = await this.userDao.findOne(email);
    if (existingUser) {
      throw userErrors.duplicateAccount(email);
    }

    return await this.userDao.save(createUser);
  }

  async get(userId: string): Promise<User> {
    const user = await this.userDao.findByPk(userId);
    return user;
  }
}

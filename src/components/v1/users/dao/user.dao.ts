import { nanoid } from 'nanoid';
import { userErrors } from '../../../../errors/user.error';
import { UserSchema } from '../../../../models/user/user';

export class UserDao {
  async save(createUser: CreateUser): Promise<User> {
    const id = nanoid();
    const newUser = new UserSchema({ id, ...createUser });
    await newUser.save();

    return newUser.get();
  }

  async findByPk(userId: string): Promise<User> {
    const user = await UserSchema.findByPk(userId);

    if (!user) {
      throw userErrors.userNotFound(userId);
    }
    return user.get();
  }

  async findOne(email: string): Promise<User> {
    const user = await UserSchema.findOne({ where: { email } });

    if (!user) {
      throw userErrors.userNotFound(email);
    }
    return user.get();
  }
}

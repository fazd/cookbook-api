import { nanoid } from 'nanoid';
import { UserSchema } from '../../../../models/user/user';

export class UserDao {
  async save(createUser: CreateUser): Promise<User> {
    const id = nanoid();
    const newUser = new UserSchema({ id, ...createUser });
    await newUser.save();

    return newUser.get();
  }

  async findByPk(userId: string): Promise<User | null> {
    const user = await UserSchema.findByPk(userId);

    if (!user) {
      return null;
    }
    return user.get();
  }

  async findOne(email: string): Promise<User | null> {
    const user = await UserSchema.findOne({ where: { email } });

    if (!user) {
      return null;
    }
    return user.get();
  }
}

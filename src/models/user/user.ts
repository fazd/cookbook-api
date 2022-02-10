import { Model, DataTypes } from 'sequelize';
import { database } from '../../config/database';
import { RecipeSchema } from '../recipe/recipe';

export class UserSchema extends Model<User> {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
}

export const userParams = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

UserSchema.init(userParams, { sequelize: database, modelName: 'User', timestamps: true });

UserSchema.hasMany(RecipeSchema, { foreignKey: 'author' });

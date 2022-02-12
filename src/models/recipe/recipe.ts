import { Model, DataTypes } from 'sequelize';
import { UserSchema } from '../user/user';
import { database } from '../../config/database';
import { Recipe } from '../../interfaces/IRecipe.interface';

export class RecipeSchema extends Model<Recipe> {}

export const recipeParams = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  author: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: UserSchema,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

RecipeSchema.init(recipeParams, { sequelize: database, modelName: 'Recipe', timestamps: true });

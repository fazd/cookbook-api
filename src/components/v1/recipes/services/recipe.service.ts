import { recipeErrors } from '../../../../errors/recipe.error';
import { RecipeDao } from '../dao/recipe.dao';

export class RecipeService {
  private readonly recipeDao: RecipeDao;

  constructor() {
    this.recipeDao = new RecipeDao();
  }

  async create(userId: string, createRecipe: CreateRecipe): Promise<Recipe> {
    const newRecipe = await this.recipeDao.save({ ...createRecipe, author: userId });

    return newRecipe;
  }

  async getAllRecipes(paginationParams: Pagination, userId?: string): Promise<PaginatedData<Recipe>> {
    const recipes = await this.recipeDao.getAll(paginationParams, userId);
    return recipes;
  }

  async updateRecipe(userId: string, id: string, updateRecipe: UpdateRecipe): Promise<boolean> {
    console.log('userId', userId);
    console.log('id', id);
    console.log('updateRecipe', updateRecipe);
    const updatedRecipe = await this.recipeDao.update(userId, id, updateRecipe);

    if (!updatedRecipe) {
      throw recipeErrors.updateFailed(id);
    }

    return updatedRecipe;
  }

  async deleteRecipe(userId: string, id: string): Promise<boolean> {
    const isDeleted = await this.recipeDao.delete(userId, id);

    if (!isDeleted) {
      throw recipeErrors.deleteFailed(id);
    }

    return isDeleted;
  }
}

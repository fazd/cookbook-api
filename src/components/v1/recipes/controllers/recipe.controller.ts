import { RequestHandler } from 'express';
import { RecipeService } from '../services/recipe.service';

export class RecipeController {
  private readonly recipeService: RecipeService;

  constructor() {
    this.recipeService = new RecipeService();
  }

  create: RequestHandler = async (req, res, next) => {
    const { body, auth } = req;
    try {
      const recipe = await this.recipeService.create(auth.id, body);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req;
      console.log('query', query);
      const recipes = await this.recipeService.getAllRecipes(query as Pagination);
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  };

  getOwn: RequestHandler = async (req, res, next) => {
    const { query, auth } = req;

    try {
      const recipes = await this.recipeService.getAllRecipes(query as Pagination, auth.id);
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  };

  update: RequestHandler = async (req, res, next) => {
    const { body, params, auth } = req;

    try {
      const recipe = await this.recipeService.updateRecipe(auth.id, params.id, body);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    const { params, auth } = req;

    try {
      const recipe = await this.recipeService.deleteRecipe(auth.id, params.id);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  };
}

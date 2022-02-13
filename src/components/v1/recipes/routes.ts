import { Router } from 'express';
import { validateAuth } from '../../../middlewares/is-auth.middleware';
import { validSchema } from '../../../middlewares/valid-schema.middleware';
import { RecipeController } from './controllers/recipe.controller';
import { createRecipeDto, getRecipeDto, updateRecipeDto } from './dto/recipe.dto';

const recipeController = new RecipeController();

const recipeRouter = Router();

recipeRouter
  .route('/')
  .post(validateAuth, validSchema(createRecipeDto), recipeController.create)
  .get(validateAuth, validSchema(getRecipeDto), recipeController.getOwn);

recipeRouter.route('/all').get(validSchema(getRecipeDto), recipeController.getAll);

recipeRouter
  .route('/:id')
  .patch(validateAuth, validSchema(updateRecipeDto), recipeController.update)
  .delete(validateAuth, recipeController.delete);

export default recipeRouter;

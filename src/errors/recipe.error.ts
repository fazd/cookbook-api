import ErrorResponse from '../utils/custom-error';

export const recipeErrors: Record<string, (...params: string[]) => ErrorResponse> = {
  RecipeNotFound: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe not found',
      message: `Recipe with id: ${id} not found`,
      status: 422,
    });
  },
  creationFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe could not be created',
      message: `Recipe with id: ${id} could not be created`,
      status: 500,
    });
  },

  updateFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe could not be updated',
      message: `Recipe with id: ${id} could not be updated`,
      status: 403,
    });
  },

  deleteFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe Could not be deleted',
      message: `Recipe with id: ${id} could not be deleted`,
      status: 403,
    });
  },
};

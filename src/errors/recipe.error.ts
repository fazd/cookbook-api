import ErrorResponse from '../utils/custom-error';
import { StatusCodes } from 'http-status-codes';

export const recipeErrors: Record<string, (...params: string[]) => ErrorResponse> = {
  RecipeNotFound: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe not found',
      message: `Recipe with id: ${id} not found`,
      status: StatusCodes.NOT_FOUND,
    });
  },
  creationFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe could not be created',
      message: `Recipe with id: ${id} could not be created`,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  },

  updateFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe could not be updated',
      message: `Recipe with id: ${id} could not be updated`,
      status: StatusCodes.FORBIDDEN,
    });
  },

  deleteFailed: (id: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'Recipe Could not be deleted',
      message: `Recipe with id: ${id} could not be deleted`,
      status: StatusCodes.FORBIDDEN,
    });
  },
};

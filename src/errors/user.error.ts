import ErrorResponse from '../utils/custom-error';
import { StatusCodes } from 'http-status-codes';

export const userErrors: Record<string, (...params: string[]) => ErrorResponse> = {
  userNotFound: (userId: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with id ${userId} not found`,
      code: 'user not found',
      status: StatusCodes.NOT_FOUND,
    });
  },
  creationFailed: (email: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'email could not be created',
      message: `User with email: ${email} could not be created`,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  },
  duplicateAccount: (email: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with email: ${email} already has a account`,
      code: 'Duplicate account',
      status: StatusCodes.BAD_REQUEST,
    });
  },
  updateFailed: (email: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with email: ${email} could not be created`,
      code: 'Could not be created',
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  },
};

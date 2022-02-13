import ErrorResponse from '../utils/custom-error';

export const userErrors: Record<string, (...params: string[]) => ErrorResponse> = {
  userNotFound: (userId: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with id ${userId} not found`,
      code: 'user not found',
      status: 404,
    });
  },
  creationFailed: (email: string): ErrorResponse => {
    return new ErrorResponse({
      code: 'email could not be created',
      message: `User with email: ${email} could not be created`,
      status: 500,
    });
  },
  duplicateAccount: (email: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with email: ${email} already has a account`,
      code: 'Duplicate account',
      status: 422,
    });
  },
  updateFailed: (email: string): ErrorResponse => {
    return new ErrorResponse({
      message: `User with email: ${email} could not be created`,
      code: 'Could not be created',
      status: 500,
    });
  },
};

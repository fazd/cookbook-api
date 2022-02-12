import ErrorResponse from '../utils/custom-error';

export const userErrors: Record<string, (...params: string[]) => Error> = {
  userNotFound: (userId: string): Error => {
    return new Error(`User with id ${userId} not found`);
  },
  creationFailed: (email: string): Error => {
    return new ErrorResponse({
      code: 'email could not be created',
      message: `User with email: ${email} could not be created`,
      status: 500,
    });
  },
  duplicateAccount: (email: string): Error => {
    return new ErrorResponse({
      message: `User with email: ${email} already has a account`,
      code: 'Duplicate account',
      status: 422,
    });
  },
  updateFailed: (email: string): Error => {
    return new Error(`User with email: ${email} could not be created`);
  },
};

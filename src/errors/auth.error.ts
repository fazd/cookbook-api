import ErrorResponse from '../utils/custom-error';
import { StatusCodes } from 'http-status-codes';

export const authErrors: Record<string, (...params: string[]) => ErrorResponse> = {
  incorrectLogin: (email: string): ErrorResponse => {
    return new ErrorResponse({
      message: `${email}: Credentials incorrect.`,
      code: 'Credentials incorrect',
      status: StatusCodes.FORBIDDEN,
    });
  },

  unauthorized: (): ErrorResponse => {
    return new ErrorResponse({
      message: 'User not authorized to perform this task.',
      code: 'User unauthorized',
      status: StatusCodes.FORBIDDEN,
    });
  },
};

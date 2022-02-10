export const userErrors: Record<string, (...params: string[]) => Error> = {
  userNotFound: (userId: string): Error => {
    return new Error(`User with id ${userId} not found`);
  },
  creationFailed: (email: string): Error => {
    return new Error(`User with email: ${email} could not be created`);
  },
  duplicateAccount: (email: string): Error => {
    return new Error(`User with email: ${email} already has a account`);
  },
  updateFailed: (email: string): Error => {
    return new Error(`User with email: ${email} could not be created`);
  },
};

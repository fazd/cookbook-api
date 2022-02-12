export const authErrors: Record<string, (...params: string[]) => Error> = {
  incorrectLogin: (email: string): Error => {
    return new Error(`credentials for ${email} are incorrect`);
  },
};

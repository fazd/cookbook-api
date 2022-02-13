import { RequestHandler } from 'express';
import { authErrors } from '../errors/auth.error';
import { validateAuthToken } from '../utils/jwt';

export const validateAuth: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  const parsedAuth = authorization?.split(' ')[1];
  console.log('parsedAuth', parsedAuth);
  if (!parsedAuth) {
    throw authErrors.unauthorized();
  }
  try {
    console.log('123');
    const auth = validateAuthToken(parsedAuth as string);
    console.log('auth', auth);
    req.auth = auth;
    next();
  } catch (error) {
    throw authErrors.unauthorized();
  }
};

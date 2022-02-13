import jwt from 'jsonwebtoken';
import { configuration } from '../config';

const { secret, expiresIn } = configuration.jwt;

export const generateAuthToken = (id: string, email: string): JwtToken => {
  const token = jwt.sign({ id, email }, secret, { algorithm: 'HS256', expiresIn: '24h' });

  return {
    token,
    expiresIn,
  };
};

export const validateAuthToken = (token: string): any => {
  console.log(`-${token}-`);
  const verifyToken = jwt.verify(token, secret, { algorithms: ['HS256'] });
  console.log('verifyToken', verifyToken);
  return verifyToken;
};

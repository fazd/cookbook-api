import { config } from 'dotenv';

config();

export const configuration = Object.freeze({
  port: parseInt(process.env.PORT || '3000'),
});

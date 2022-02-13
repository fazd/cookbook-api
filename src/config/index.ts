import { config } from 'dotenv';

config();

export const configuration = Object.freeze({
  port: parseInt(process.env.PORT || '3000'),
  environment: process.env.ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN!,
  },
  database: {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    database: process.env.DATABASE!,
    host: process.env.HOST!,
    port: parseInt(process.env.DB_PORT!, 10),
  },
  pagination: {
    limit: process.env.PAGINATION_LIMIT || '20',
    page: process.env.PAGINATION_PAGE || '1',
    orderBy: process.env.PAGINATION_ORDER_BY || 'DESC',
    sortBy: process.env.PAGINATION_SORT_BY || 'createdAt',
  },
});

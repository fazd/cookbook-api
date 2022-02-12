import express from 'express';
import cors from 'cors';
import apiRouter from './components/routes';
import Logger from './config/logger';
import { customErrorMiddleware } from './middlewares/custom-error.middleware';

const app = express();

app.use(Logger.requests);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  }),
);

app.get('/', (_req, res, _next) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.use('/api', apiRouter);

app.use(customErrorMiddleware);

export { app };

import express from 'express';
import cors from 'cors';
import apiRouter from './components/routes';

const app = express();

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

export { app };

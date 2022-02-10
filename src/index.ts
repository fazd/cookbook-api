import http from 'http';
import { app } from './app';
import { configuration } from './config/index';
import Logger from './config/logger';

const { port } = configuration;

const server = http.createServer(app);

server.listen(port, () => {
  Logger.info(`Server running on port ${port}`);
});

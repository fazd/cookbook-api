import http from 'http';

import { app } from './src/app';
import { configuration } from './src/config/index';

const { port } = configuration;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

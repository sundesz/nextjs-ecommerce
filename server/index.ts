import http from 'http';
import { PORT } from './src/utils/config';
import app from './src/app';
import { connectToDatabase } from './src/db';

const server = http.createServer(app);

const start = async () => {
  await connectToDatabase();
  server.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

void start();

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import registerSocketHandlers from './socket.io.js';

const app = express();
const httpServer = createServer(app);
const PORT = 3000;
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  },
});

registerSocketHandlers(io);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const startServer = () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default io;
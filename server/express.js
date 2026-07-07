import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default io;
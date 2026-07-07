import io from './express.js';

io.on('connection', (socket) => {
  console.log('A user connected');
});
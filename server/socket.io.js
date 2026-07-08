const registerSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('mousemove', (data) => {
      console.log(`Mouse moved to: x=${data.x}, y=${data.y}`);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};

export default registerSocketHandlers;
const { io } = require('../app');

io.on('connection', (socket) => {
   socket.on('join_chat', (room) => {
      socket.join(room);
   });

   socket.on('send_message', (data) => {
      socket.to(data.room).emit('receive_message', data.message);
   });
});

const {io, } = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
   server.listen(process.env.PORT, () => {
      console.log(`%s listening at ${process.env.PORT}`);
   });
});


io.on('connection', (socket) => {
   socket.on('join_chat', (room) => {
      socket.join(room);
   });

   socket.on('send_message', (data) => {
      socket.to(data.room).emit('receive_message', data.actualMessage);
   });
});

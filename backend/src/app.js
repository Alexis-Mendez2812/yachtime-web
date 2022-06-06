const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

require('./db.js');

const app = express();
app.use(cors());

app.name = 'API';

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

app.use('/', routes);

// Error catching endware.
app.use((err, req, res, next) => {
   const status = err.status || 500;
   const message = err.message || err;
   console.error(err);
   res.status(status).send(message);
});

const newServer = http.createServer(app);
const io = new Server(newServer, {
   cors: {
      origin: 'http://yachtime-web.vercel.app',
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
   },);

io.on('connection', (socket) => {
   socket.on('join_chat', (room) => {
      socket.join(room);
   });

   socket.on('send_message', (data) => {
      socket.to(data.room).emit('receive_message', data.actualMessage);
   });
});

module.exports = newServer;

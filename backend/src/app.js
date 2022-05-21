const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



//ruta de prueba para ver si fetchea data de api
server.get('/comics',async (req, res) => {
    try{
        const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
    data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})

    }catch(error){
        console.log(error)
    }
})
   
 

server.get('/prueba', (req, res, next) => {
    res.send('Hellos! Server is ready!');
});

//const port = process.env.PORT || 3001;

module.exports = server;

const express = require('express');
const server = express();

const PORT = 8080;

const PATH = '/';
const callback = (request, response, next) => {
  response.send({ mensaje: 'HOLA MUNDO'});
};

server.get(PATH, callback);

const callbackInit = () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
};
server.listen(PORT, callbackInit);

server.on('error', (error) => console.log('Error: ', error));

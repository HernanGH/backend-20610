const express = require('express');
const server = express();

const PORT = 3000;

server.get('/', (solicitud, respuesta, siguiente) => {
  respuesta.send({ mensaje: 'HOLA MUNDO' });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

server.on('error', (error) => console.log('Error: ', error));

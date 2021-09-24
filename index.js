const express = require('express');

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.json');

const server = express();

const PORT = 8080;

const obtenerRandomInferior = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

// endpoint inicial
const PATH = '/';
const callback = (request, response, next) => {
  response.send({ mensaje: 'HOLA MUNDO'});
};
server.get(PATH, callback);

// endpoint /products
server.get('/productos', async (req, res) => {
  const productos = await contenedor.getAll();
  console.log('productos: ', productos);
  res.json(productos);
});

// endpoint /productsRandom
server.get('/productosRandom', async (req, res) => {
  const productos = await contenedor.getAll();
  // checkear la funcion obtenerRandomInferior no respeta los limites: max
  const posicionRandom = obtenerRandomInferior(0, productos.length - 2);
  res.json(productos[posicionRandom]);
});


// enciendo el server
const callbackInit = () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
};
server.listen(PORT, callbackInit);

// manejo de errores
server.on('error', (error) => console.log('Error: ', error));

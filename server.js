const express = require('express');

const personasRouter = require('./routers/personas');

// const mascotasContenedor = new Contenedor('./mascotas.json');

const server = express();

const PORT = 8080;

// middlewares de express, que permite usar el req.body
// setear el formate de los parametros que voy a recibir en json
// json extendidos, no solo texto, sino numeros 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// agregamos servidor estatico para la carpeta public
server.use('/static', express.static('public'));

server.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

const middleware1 = (req, res, next) => {
  console.log('middleware1');
  next();
}

server.get('/', middleware1, (req, res) => {
  console.log('ok');
  res.send({ message: new Date().toLocaleString()});
})

server.use('/api/personas', personasRouter);

server.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


server.listen(PORT, () => console.log(`Servidor corriendo en: ${PORT}`));



// manejo de errores
server.on('error', (error) => console.log('Error: ', error));



console.log(__dirname);
const express = require('express');
const compression = require('compression');
const logger = require('./logger');

const app = express();
const FRASE = 'Holaquetal';
const PORT = 3000;
const numCPUs = require('os').cpus().length;

app.use(compression());

app.get('/', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send({ status: 'ok'});
});

app.get('/info', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);

  // console.log('CODIGO SINCRONICO (demora tiempo y bloquea la ejecucion de las siguentes lineas)');

  res.send(`
    <br>Servidor express en ${PORT} -<br>
    <b>PID ${process.pid}</b><br>
    -${new Date().toLocaleString()}<br>
    Cantidad de procesadores: ${numCPUs}
  `);
});

app.get('/randoms', (req, res) => {
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send({ status: 'ok'});
});


app.get('/saludo', (req, res, next) => {
  // const respuesta = [...new Array(1000)].map(() => FRASE).join('');
  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
  res.send(FRASE);
});

app.listen(PORT, () => console.log(`APP RUNNING IN PORT ${PORT}...`));
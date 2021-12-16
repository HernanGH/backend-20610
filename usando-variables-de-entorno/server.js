const express = require('express');
const app = express();
console.log('process.env: ', process.env);
const modo = process.env.NODE_ENV || 'development'

app.get('/', (req, res) => {
  res.send(`Servidor express en modo ${modo}`);
});

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '127.0.0.1'

const server = app.listen(PORT, HOST, function () {
  console.log(`App listening on http://${HOST}:${server.address().port}`);
});
server.on('error', error => console.log('Error en servidor',error))

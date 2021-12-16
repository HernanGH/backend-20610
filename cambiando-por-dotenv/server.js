// server.js
const config = require('./config.js');
const express = require('express');
const app = express();
console.log({config});
console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
  res.send(`Servidor express en modo ${config.NODE_ENV}`);
});

app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});

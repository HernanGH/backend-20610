const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/message', (req, res) => {
  res.send('Hola Node.js con Heroku');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server express running in port: ${PORT}`);
});

server.on('error', (error) => console.log(`Server error ${error}`));
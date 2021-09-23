const express = require('express');

const app = express();

const PORT = 8080;

let visitas = 0;

app.get('/', (req, res, next) => {
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>');
});

app.get('/visitas', (req, res, next) => {
    visitas++;
    res.json(visitas);
});

app.get('/fyh', (req, res, next) => {
    const date = new Date().toLocaleString();
    res.json({ fyh: date });
});

const server = app.listen(PORT, () => {
    console.log(`http//localhost:${PORT}/`);
});

server.on('error', error => console.log('Error en servidor:', error));
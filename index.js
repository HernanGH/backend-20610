const express = require('express');
const compression = require('compression');

const app = express();

const frase = 'hola que tal';

app.get('/saludo', (req, res) => {
    const result = [...new Array(1000)].map(() => frase).join('');
    res.send(result);
});

app.get('/saludozip', compression(), (req, res) => {
    const result = [...new Array(1000)].map(() => frase).join('');
    res.send(result);
});

app.listen(8080, () => console.log('Api running in 8080'));
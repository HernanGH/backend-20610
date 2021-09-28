const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const frase = "Hola mundo como están ustedes?";

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/api/frase', (req, res) => {
    res.send(frase);
});

app.put('/api/frase/:id', (req, res) => {
  res.send(frase);
});

app.delete('/api/frase/:id', (req, res) => {
  res.send(frase);
});

// app.get('/api/frase', (req, res) => {
//     res.send(frase);
// });

// app.get('/api/frase', (req, res) => {
//   console.log(req.query.clave);
//   console.log(req.query.limit);
//   res.send(req.query);
// });

// app.get('/api/frase/:id', (req, res) => {
//   console.log(req.params.id);
//   console.log(typeof req.params.id);
//   res.send(req.params);
// });

app.get('/api/letras/:num', (req, res) => {
    const n = req.params.num;
    const largo = frase.length;
    if (isNaN(n)) {
        res.send('El parámetro ingresado no es un número');
    } else if (n > largo -1) {
        res.send('El parámetro ingresado está fuera del rango');
    } else {
        res.send(`El parámetro ingresado corresponde al caracter '${frase[n]}' de la frase.`);
    }
});

app.get('/api/palabras/:num', (req, res) => {
    const n = req.params.num;
    const palabrasArr = frase.split(' ');
    const largo = palabrasArr.length;
    if (isNaN(n)) {
        res.send('El parámetro ingresado no es un número');
    } else if (n > largo -1) {
        res.send('El parámetro ingresado está fuera del rango');
    } else {
        res.send(`El parámetro ingresado corresponde a la palabra '${palabrasArr[n]}' de la frase.`);
    }
});

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${server.address().port}`)
});
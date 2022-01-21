// import env from './env.js'
// import app from './server.js'
import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('hello world'));

app.get('/test', (req, res) => res.send('[test] - hello world'));

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

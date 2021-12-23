//tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
//taskkill /pid numpid /f -> mata un proceso por su número de PID

//npm i -g forever
//npm list -g | grep forever

//forever start -w server.js PORT
//forever list
//forever stop id
//forever stopall
//forever --help

const express = require('express')

const app = express()

//console.log(parseInt(process.argv[2]))
const PORT = parseInt(process.argv[2]) || 8080

app.get('/', (req,res) => {
    res.send(`Servidor express <span style="color:red;">(forever)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})

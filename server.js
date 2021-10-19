const express = require('express')
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const { getMessages, saveMessage } = require('./models/messages')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log(`Nuevo cliente conectado! ${socket.id}`)
  
  const messages = getMessages()
  socket.emit('messages', messages)

  socket.on('new-message', (message) => {
    saveMessage(message)

    const messages = getMessages()

    // notificará a todos los sockets conectados
    io.sockets.emit('messages', messages)
  })
})

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})

connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
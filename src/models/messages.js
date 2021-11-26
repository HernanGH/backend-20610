// data base, table messages
const messages = [
  { 
    id: 0,
    author: {
      id: 'mail del usuario', 
      nombre: 'nombre del usuario', 
      apellido: 'apellido del usuario', 
      edad: 'edad del usuario', 
      alias: 'alias del usuario',
      avatar: 'url avatar (foto, logo) del usuario'
    },
    text: "¡Hola! ¿Que tal?"
  },
  { 
    id: 1,
    author: {
      id: 'mail del usuario', 
      nombre: 'nombre del usuario', 
      apellido: 'apellido del usuario', 
      edad: 'edad del usuario', 
      alias: 'alias del usuario',
      avatar: 'url avatar (foto, logo) del usuario'
    },
    text: "¡Muy bien! ¿Y vos?"
  },
  { 
    id: 2,
    author: {
      id: 'mail del usuario', 
      nombre: 'nombre del usuario', 
      apellido: 'apellido del usuario', 
      edad: 'edad del usuario', 
      alias: 'alias del usuario',
      avatar: 'url avatar (foto, logo) del usuario'
    },
    text: "¡Genial!"
  }
];

const Contenedor = require('../../Contenedor');
const { normalizeMessages } = require('../utils/normalizar');
const { sqliteOptions } = require('./databases');

// const messageContenedor = new Contenedor(sqliteOptions,'messages');

const getMessages = async () => {
  // const messages = await messageContenedor.getAll();

  return normalizeMessages({ id: 'messages', messages });
};

const saveMessage = async (message) => {
  // const idMessage = await messageContenedor.save(message);
  messages.push(message);
  return message.id;
}

module.exports = {
  getMessages,
  saveMessage
};
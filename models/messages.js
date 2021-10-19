// data base, table messages
const messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

const getMessages = () => {
  return messages;
};

const saveMessage = (message) => {
  messages.push(message);
}

module.exports = {
  getMessages,
  saveMessage
};
console.log({normalizr});
const socket = io.connect();

const renderMessages = (messages) => {
  const htmls = messages.map((messsage) => {
    return(`
      <div>
        <strong>${messsage.name}</strong>:
        <em>${messsage.messages}</em>
      </div>
    `);
  });

  const html = htmls.join(" ");

  document.getElementById('messages').innerHTML = html;
}

const addMessage = (event) => {
  // prevenimos el recargo de pagina
  event.preventDefault();

  // armamos el mensaje con los valores
  const mensaje = {
    name: document.getElementById('username').value,
    messages: document.getElementById('texto').value
  };

  // enviamos el mensaje
  socket.emit('new-message', mensaje);

  // limpiamos el form
  document.getElementById('username').value = '';
  document.getElementById('texto').value = '';
};

const form = document.getElementById('form');
form.addEventListener('submit', addMessage);

const schemaAuthor = new normalizr.schema.Entity('author', {}, {idAttribute: 'id'});

const schemaMessage = new normalizr.schema.Entity('message', {
  author: schemaAuthor
});

const schemaMessages = new normalizr.schema.Entity('messages', {
  messages: [schemaMessage]
});

socket.on('messages', data => {
  console.log(data);
  const dataDenormalized = normalizr.denormalize(data.result, schemaMessages, data.entities);
  console.log(dataDenormalized);
  renderMessages(data);
});

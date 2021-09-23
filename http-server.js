const http = require('http');

// const hour = new Date().getHours(); // hora de inicio de servidor

const server = http.createServer((solicitud, respuesta) => {

  // respuesta.end(() => {
  //   const date = new Date ();
  //   date.getHours() >= 6 && date.getHours() < 12 ? console.log("Buenos dias")
  //     : date.getHours() >= 13 && date.getHours() < 19 ? console.log("Buenas tardes")
  //     : console.log("buenas noches")
  // });
  const hour = new Date().getHours(); // hora de la solicitud

  if(hour>6 && hour <=12){
    respuesta.end('Buenos dias')
  } else if(hour>13 && hour<=19){
    respuesta.end('Buenas tardes')
  } else {
    respuesta.end('Buenas noches')
  }
  
});

const serverConectado = server.listen(8080, () => {
  console.log(`SERVER ANDANDO ${serverConectado.address().port}`);
});

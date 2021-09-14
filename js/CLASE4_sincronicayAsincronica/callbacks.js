// CALLBACK //
// const ejecutar = (unaFuncion) => unaFuncion();

// const saludar = () => console.log('HOLA 2');

// ejecutar(() => console.log('HOLA 3'));

// ENVIO LA FUNCION DIRECTO
// const ejecutar = (unaFuncion) => unaFuncion();

// const saludar = () => console.log('HOLA');

// ejecutar(() => console.log('HOLA'));

// CALLBACK con parametros //

// const ejecutar = (parametros, unaFuncion) => unaFuncion(parametros);

// const saludar = (nombre) => console.log(`Hola ${nombre}`);
// // saludar('Hernan');
// ejecutar('Hernan', saludar);

// EJEMPLO //

// function escribirYLoguear(texto, callbackParaLoguear) {
//   // simulamos que escribimos en un archivo!
//   console.log(texto)
//   // al finalizar, ejecutamos el callback
//   callbackParaLoguear('archivo escrito con éxito');
//  }
 
//  const callback = (mensajeParaLoguear) => {
//   const fecha = new Date().toLocaleDateString()
//   console.log(`${fecha}: ${mensajeParaLoguear}`)
//  };

//  escribirYLoguear('hola mundo de los callbacks!', callback)
// ===
//  escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
//   const fecha = new Date().toLocaleDateString()
//   console.log(`${fecha}: ${mensajeParaLoguear}`)
// });
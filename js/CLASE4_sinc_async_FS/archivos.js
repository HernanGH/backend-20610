const fs = require('fs');

/** FS SINCRONICO */

// ////// LEER ARCHIVO //////

// const data = fs.readFileSync('./historial.txt', 'utf-8');
// si lo ejecuto este archivo js desde la carpeta principal tengo que agregar toda la ruta del archivo
// const data = fs.readFileSync('./js/CLASE4_sinc_async_FS/historial.txt', 'utf-8');

// console.log({ mensaje: data});

// ////// CREAR/SOBREESCRIBIR ARCHIVO  //////

// fs.writeFileSync('./historial.txt', 'ESTO ES UNA PRUEBA\n');

// ////// EDITAR ARCHIVO - AGREGAR  //////

// fs.appendFileSync('./historial.txt', 'ESTO ES UNA AGREGADO\t');

// ////// BORRAR ARCHIVO  //////

// fs.unlinkSync('./historial.txt');

////// ERRORES  //////
// try {
//   const data = fs.readFileSync('./archivo-que-no-existe.txt', 'utf-8');
  
// } catch (error) {
//   console.error(error);
// }

/** FS ASINCRONICO con callbacks*/

// ////// LEER ARCHIVO //////

// fs.readFile('./historial.txt', 'utf-8', (error, contenido) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log(contenido);
//   }
// });
// console.log('CODIGO SINCRONICO');

////// CREAR/SOBREESCRIBIR ARCHIVO //////

// fs.writeFile('./historial.txt', 'TEXTO DE PRUEBA\n', (error) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('guardado');
//   }
// });

// ////// EDITAR ARCHIVO - AGREGAR  //////

// fs.appendFile('./historial.txt', 'ESTO ES UNA AGREGADO\n', (error) => {
//   if (error) {
//     console.error('Error:'. error);
//   }
// });

// ////// BORRAR ARCHIVO  //////

// fs.unlink('./historial.txt', (error) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('borrado');
//   }   
// });

// ////// CREAR CARPETA  //////

// fs.mkdirSync

// fs.mkdir('./files', (error) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('carpeta creada');
//   }   
// });

// ////// LEER ARCHIVOS DE UN CARPETA  //////

// fs.readdirSync

// fs.readdir('./files', (error, nombres) => {
//   if (error) {
//     console.error('Error:'. error);
//   } else {
//     console.log(nombres);
//   }   
// });

/** FS ASINCRONICO con promesas */

// ////// LEER ARCHIVO //////
// then-catch asincronico no bloqueante
fs.promises.readFile('./historial.txt', 'utf-8')
  .then((contenido) => {
    console.log(contenido);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// // async-await asincronico bloqueante
// const leer = async () => {
//   try {
//     const contenido = await fs.promises.readFile('./historial.txt', 'utf-8');
//     console.log(contenido);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };  
// leer();
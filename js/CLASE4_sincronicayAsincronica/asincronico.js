const escribirArchivo = (mensaje, callback) => {
  console.log('Escribiendo en el archivo', mensaje);

  // simulamos la escritura en archivo con setTimeout
  setTimeout(() => {
    console.log('Se termino de escribir en el archivo');
    // termino de escribir ejecutamos la funcion callback que nos enviaron
    callback();
  }, 3000);
};


console.log('inicio del programa');

escribirArchivo('hola mundo', () => {
  console.log('termino de escribir el archivo');
});

console.log('fin del programa');
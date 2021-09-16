const escribirArchivo = (mensaje, callback) => {
  /** ⏰ 3 */ console.log('⏰ 3 Escribiendo en el archivo...', mensaje);

  // simulamos la escritura en archivo con setTimeout

  /** ⏰  4 */ setTimeout(() => {

    /** ⛔​ 1 */ console.log('⛔ Se termino de escribir en el archivo');
    // termino de escribir ejecutamos la funcion callback que nos enviaron

    /** ⛔​ 2 */ callback();

  }, 3000);
};


/** ⏰ 1 */ console.log('⏰ 1 inicio del programa');

/** ⏰ 2 */ escribirArchivo('hola mundo', () => {
  
  /** ⛔​ 3 */ console.log('⛔ termino de escribir el archivo');

});

/** ⏰ 5 */ console.log('⏰ 5 fin del programa');
const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('mascotas.json');

const miMascota = {
  name: 'terry',
  age: 5
};

const main = async () => {
  // const id = await contenedor.save(miMascota);
  
  // console.log(id);

  // const list = await contenedor.getAll();
  // console.log(list);

  // await contenedor.deleteAll();
};

main();
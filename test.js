const Contenedor = require('./Contenedor');

const contedor = new Contenedor('./productos.json');

contedor.save({
  name: 'producto prueba 3'
});

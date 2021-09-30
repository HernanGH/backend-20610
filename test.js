const Contenedor = require('./Contenedor');

const contedor = new Contenedor('./data/personas.json');

contedor.save({
  name: 'house'
});

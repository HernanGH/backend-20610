const { options } = require('./options/mysql');

const knex = require('knex')(options);

knex.schema.createTable('cars', (table) => {
  table.increments('id');
  table.string('name');
  table.integer('price');
})
  .then(() => console.log('Table created'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy())

const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').where('price', '>', '50000').del()
  .then(() => console.log('deleted'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

knex.from('cars').where('price', '>', '50000').del()
  .then(() => console.log('deleted'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

knex.from('cars').where('price', '>', '50000').del()
  .then(() => console.log('deleted'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

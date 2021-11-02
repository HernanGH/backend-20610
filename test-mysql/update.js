const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').where('id', '3').update({price: 1000})
  .then(() => console.log('updated'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

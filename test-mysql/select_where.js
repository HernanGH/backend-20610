const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').select('name', 'price').where('price', '>', '50000')
  .then((rows) => {
    rows.forEach(car => {
      console.log(`NAME: ${car.name}, PRICE: ${car.price}`)
    });
  })
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

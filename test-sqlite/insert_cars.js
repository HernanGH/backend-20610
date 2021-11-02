const { options } = require('./options/sqlite');
const knex = require('knex')(options);

const cars = [
  { name: 'Audi', price: 52642 },
  { name: 'Mercedez', price: 57127 },
  { name: 'Skoda', price: 9000 },
  { name: 'Volvo', price: 29000 },
  { name: 'Bentley', price: 350000 },
  { name: 'Hummer', price: 41400 },
  { name: 'Volkswagen', price: 21600 }
];

knex('cars').insert(cars)
  .then(() => console.log('data inserted'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knex.destroy());

const ProductDaoMongo = require('./products/ProductDaoMongo');
// const ProductDaoMemory = require('./products/ProductDaoMemory');
// const ProductDaoFirestore = require('./products/ProductDaoFirestore');
// const ProductDaoFile = require('./products/ProductDaoFile');

const daos = {}
daos['ProductDao'] = ProductDaoMongo;

// si setamos mongo vamos a exportar los daos de mongo
if (process.env.storage === 'mongodb') {
  daos['ProductDao'] = ProductDaoMongo;
}

// si setamos memoria vamos a exportar los daos de memoria
if (process.env.storage === 'memory') {
  // daos['ProductDao'] = ProductDaoMemory;
}

// si setamos firestore vamos a exportar los daos de firestore
if (process.env.storage === 'firestore') {
  // daos['ProductDao'] = ProductDaoFirestore;
}

// si setamos archivo vamos a exportar los daos de archivo
if (process.env.storage === 'file') {
  // daos['ProductDao'] = ProductDaoFile;
}

module.exports = daos;
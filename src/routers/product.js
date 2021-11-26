const express = require('express');
// const ProductDaoMongo = require('../daos/products/ProductDaoMongo');

// importo el dao que exporte en el /daos/index.js
const { ProductDao } = require('../daos');
const isAdmin = require('../middlewares/isAdmin');
// const { getAllProducts, createProduct, getProduct } = require('../models/product');

const productRouter = express.Router();

const productDao = new ProductDao();

productRouter.get('/', async (req, res) => {
  // const data = await getAllProducts();
  const data = await productDao.getAll();
  res.send({ data });
});


productRouter.get('/:id', async (req, res) => {
  const productId = req.params.id;
  // const data = await getProduct(productId);
  const data = await productDao.getById(productId);
  res.send({ data });
});

// isAdmin  es un middleware local 
productRouter.post('/', isAdmin, async (req, res) => {
  const nuevoProducto = req.body;

  // const idProductsaved = await createProduct(nuevoProducto);
  const idProductsaved = await productDao.create(nuevoProducto);

  res.send({ data: idProductsaved });
});


module.exports = productRouter;


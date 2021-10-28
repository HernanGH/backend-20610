const express = require('express');
const { getAllProducts, createProduct } = require('../models/product');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const data = await getAllProducts();
  res.send({ data });
});

productRouter.post('/', async (req, res) => {
  const nuevoProducto = req.body;

  const idProductsaved = await createProduct(nuevoProducto);

  res.send({ data: idProductsaved });
});


module.exports = productRouter;


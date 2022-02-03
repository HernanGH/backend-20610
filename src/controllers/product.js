const { getAllProducts, createProduct } = require('../models/product');

const getAll = async (req, res) => {
  const data = await getAllProducts();
  res.send({ data });
};

const create = async (req, res) => {
  const nuevoProducto = req.body;

  const idProductsaved = await createProduct(nuevoProducto);

  res.send({ data: idProductsaved });
};

module.exports = {
  getAll,
  create
}
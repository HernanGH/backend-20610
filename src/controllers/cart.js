const {
  createCart, deleteCart, getProductsByIdCard,
  addProductsToCart, deleteProductToCart
} = require('../models/cart');

const ADMIN = true;


const main = async (req, res) => {
  // const data = await getAllCart();
  res.send({});
};

const create = async (req, res) => {
  const cart = req.body;

  const idCartSaved = await createCart(cart);

  res.send({ data: idCartSaved });
};

const remove = async (req, res) => {
  const cart = req.body;
  const idCartDeleted = await deleteCart(cart);
  checkNotification(ADMIN, cart);

  res.send({ data: idCartDeleted });
};

const getProducts = async (req, res) => {
  const cartId = req.params.id;
  const list = await getProductsByIdCard(cartId);

  res.send({ data: list });
};

const addProduct = async (req, res) => {
  const cartId = req.params.id;
  const cartUpdate = req.body;

  const cart = await addProductsToCart(cartId, cartUpdate);

  res.send({ data: cart });
};

const removeProduct = async (req, res) => {
  const cartId = req.params.id;
  const productId = req.params.id_prod;

  const cart = await deleteProductToCart(cartId, productId);

  res.send({ data: cart });
};

module.exports = {
  main,
  create,
  remove,
  getProducts,
  addProduct,
  removeProduct
};
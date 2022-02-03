const express = require('express');

const cartController = require('../controllers/cart');

const cartRouter = express.Router();

cartRouter.get('/', cartController.main);

cartRouter.post('/', cartController.create);

cartRouter.delete('/:id', cartController.remove);

cartRouter.get('/:id/productos', cartController.getProducts);

cartRouter.post('/:id/productos', cartController.addProduct);

cartRouter.delete('/:id/productos/:id_prod', cartController.removeProduct);

module.exports = cartRouter;


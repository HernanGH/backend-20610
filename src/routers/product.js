const express = require('express');
const isAdmin = require('../middlewares/isAdmin');

const productController = require('../controllers/product');

const productRouter = express.Router();

productRouter.get('/', productController.getAll);

// isAdmin  es un middleware local 
productRouter.post('/', isAdmin, productController.create);

module.exports = productRouter;


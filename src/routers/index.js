const express = require('express');

const cartRouter = require('./cart');
const productRouter = require('./product');

const router = express.Router();

router.use('/api/productos', productRouter);
router.use('/api/carrito', cartRouter);

module.exports = router;

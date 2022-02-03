const express = require('express');

const cartRouter = require('./cart');
const productRouter = require('./product');

const router = express.Router();

router.use('/productos', productRouter);
router.use('/carrito', cartRouter);

module.exports = router;

const express = require('express');

const Contenedor = require('../Contenedor');

const productosContenedor = new Contenedor('./data/productos.json');
const productosRouter = express.Router();

productosRouter.get('/lista-productos', async (req, res) => {
  const lista = await productosContenedor.getAll();
  res.render('../views/pages/lista-productos', {
    message: 'success',
    data: lista
  });
})

productosRouter.get('/form', async (req, res) => {
 
  res.render('../views/pages/form');
})

productosRouter.post('/form', async (req, res) => {
  
  const nuevoProducto = req.body;

  const idProductoGuardado = await productosContenedor.save(nuevoProducto);

    res.redirect('/lista-productos')

    res.send({
      message: 'Producto guardado',
      data: {
        ...nuevoProducto,
        id: idProductoGuardado
      }
  });

})

productosRouter.get('/api/products/:id', async (req, res) => {
  const productoId = req.params.id;
  const producto = req.body;
  const productoGet = await productosContenedor.getById(productoId, producto);

  if (!productoGet) {
    res.send({
      message: 'No se pudo encontrar el producto.',
      data: productoGet
    });
  } else {
    res.send({
      message: 'Producto encontrado con éxito.',
      data: productoGet
    });
  }
});
productosRouter.put('/api/products/:id', async (req, res) => {
  const productoId = req.params.id;
  const producto = req.body;
  const productoUpdated = await productosContenedor.update(productoId, producto);

  if (!productoUpdated) {
    res.send({
      message: 'Actualización fallida.',
      data: productoUpdated
    });
  } else {
    res.send({
      message: 'Actualización realizada con éxito.',
      data: productoUpdated
    });
  }
});

productosRouter.delete('/api/products/:id', async (req, res) => {
  const productoId = req.params.id;
  const producto = req.body;
  const productoDelete = await productosContenedor.deleteById(productoId, producto);

  if (!productoDelete) {
    res.send({
      message: 'No se pudo eliminar el producto.',
      data: productoDelete
    });
  } else {
    res.send({
      message: 'Producto eliminado con éxito.',
      data: productoDelete
    });
  }
});

module.exports = productosRouter;

console.log(__dirname);
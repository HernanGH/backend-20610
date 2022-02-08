import express from 'express'
import PersistenceFactory from '../daos/index.js'
import soloAdmins from '../middlewares/index.js'
import getPersistence from '../utils/getPersistence.js'

const { Router } = express

//--------------------------------------------
// configuro router de productos
const productosRouter = new Router()

const { productosDao: productosApi } = await PersistenceFactory.getPersistenceMethod(getPersistence())

// const cotizaciondeHoy = 213;

productosRouter.get('/', async (req, res) => {
    const productos = await productosApi.listarAll()
    // const productosList = new ProductDto(productos, cotizaciondeHoy)
    res.json(productos)
})

productosRouter.get('/:id', async (req, res) => {
    res.json(await productosApi.listar(req.params.id))
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    res.json(await productosApi.guardar(req.body))
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    res.json(await productosApi.actualizar(req.body))
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    res.json(await productosApi.borrar(req.params.id))
})

export default productosRouter

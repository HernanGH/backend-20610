import express from 'express'
const { Router } = express

import authRouter from './routers/auth.js'
// import carritosRouter from './routers/carritos.js'
import productosRouter from './routers/productos.js'
import productosRouterGraphQl from './routers/productosGraphql.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/auth', authRouter)
// app.use('/api/productos', productosRouter)
// app.use('/api/carritos', carritosRouter)
app.use('/api/productos', productosRouterGraphQl)

export default app
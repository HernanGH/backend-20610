import express from 'express'
const { Router } = express

import authRouter from './routers/auth.js'
import carritosRouter from './routers/carritos.js'
import productosRouter from './routers/productos.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/auth', authRouter)
app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app
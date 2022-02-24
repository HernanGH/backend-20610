import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import PersistenceFactory from '../daos/index.js'
import getPersistence from '../utils/getPersistence.js'

const { productosDao: productosApi } = await PersistenceFactory.getPersistenceMethod(getPersistence())

const productSchema = buildSchema(`
  type Query {
    getProduct(id: Int): Product
    getProducts: [Product]
  }
  type Mutation {
    createProduct(
      title: String!
      price: Int!
      thumbnail: String!
    ): Product,
    updateProduct(
      id: Int!,
      title: String
      price: Int
      thumbnail: String
    ): Product,
    deleteProduct(
      id: Int!
    ): Product,                            
  },
  type Product {
    id: Int
    title: String
    price: Int
    thumbnail: String
  }    
`)

const productosRouterGraphQl = graphqlHTTP({
  schema: productSchema,
  rootValue: {
    getProduct: ({ id }) => productosApi.listar(id),
    getProducts: ()=> productosApi.listarAll(),
    createProduct: (data) => productosApi.guardar(data),
    updateProduct: (data) => productosApi.actualizar(data),
    deleteProduct: ({ id }) => productosApi.borrar(id)
  },
  graphiql: true
})

export default productosRouterGraphQl

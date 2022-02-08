class PersistenceFactory {

  static async getPersistenceMethod(pers) {
    switch (pers) {
      case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        return {
          productosDao: new ProductosDaoArchivo(),
          carritosDao: new CarritosDaoArchivo()
        }
      case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js')

        return {
          productosDao: new ProductosDaoFirebase(),
          carritosDao: new CarritosDaoFirebase()
        }
      case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js')
        const { default: CarritosDaoMongoDb } = await import('./carritos/CarritosDaoMongoDb.js')

        return {
          productosDao: new ProductosDaoMongoDb(),
          carritosDao: new CarritosDaoMongoDb()
        }
      case 'mariadb':
        const { default: ProductosDaoMariaDb } = await import('./productos/ProductosDaoMariaDb.js')
        const { default: CarritosDaoMariaDb } = await import('./carritos/CarritosDaoMariaDb.js')

        return {
          productosDao: new ProductosDaoMariaDb(),
          carritosDao: new CarritosDaoMariaDb()
        }
      case 'sqlite3':
        const { default: ProductosDaoSQLite3 } = await import('./productos/ProductosDaoSQLite3.js')
        const { default: CarritosDaoSQLite3 } = await import('./carritos/CarritosDaoSQLite3.js')

        return {
          productosDao: new ProductosDaoSQLite3(),
          carritosDao: new CarritosDaoSQLite3()
        }
      default:
        const { default: ProductosDaoMem } = await import('./productos/ProductosDaoMem.js')
        const { default: CarritosDaoMem } = await import('./carritos/CarritosDaoMem.js')

        return {
          productosDao: new ProductosDaoMem(),
          carritosDao: new CarritosDaoMem()
        }
    }

  }
}

export default PersistenceFactory

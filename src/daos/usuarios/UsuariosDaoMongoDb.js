import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"
import { asPOJO, renameField } from "../../utils/objectUtils.js"

class UsuariosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('usuarios', {
            username: { type: String, required: true },
            password: { type: String, required: true }
        })
    }

    async findUserByUserName(username) {
      try {
          const docs = await this.coleccion.find({ 'username': username }, { __v: 0 })
          if (docs.length == 0) {
              // throw new Error('Error al listar por username: no encontrado')
              return false
          } else {
              const result = renameField(asPOJO(docs[0]), '_id', 'id')
              return result
          }
      } catch (error) {
          throw new Error(`Error al listar por username: ${error}`)
      }
  }
}

export default UsuariosDaoMongoDb

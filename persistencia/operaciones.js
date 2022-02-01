const fs = require('fs')

// const operaciones = []

const ruta = `./database/operaciones.json`;

const agregar = async (operacion) => {
    const objs = await listar()

    let newId
    if (objs.length == 0) {
        newId = 1
    } else {
        newId = objs[objs.length - 1].id + 1
    }

    const newObj = { ...operacion, id: newId }
    objs.push(newObj)

    try {
        await fs.promises.writeFile(ruta, JSON.stringify(objs, null, 2))
        return newObj
    } catch (error) {
        throw new Error(`Error al guardar: ${error}`)
    }
}

const listar = async () => {
    try {
        const objs = await fs.promises.readFile(ruta, 'utf-8')
        return JSON.parse(objs)
    } catch (error) {
        return []
    }
}

module.exports = {
    agregar,
    listar
}

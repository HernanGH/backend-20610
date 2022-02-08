//--------------------------------------------
// permisos de administrador

const esAdmin = true

const crearErrorNoEsAdmin = (ruta, metodo) => {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

const soloAdmins = (req, res, next) => {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

export default soloAdmins
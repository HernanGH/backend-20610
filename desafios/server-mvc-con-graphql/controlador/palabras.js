import ApiPalabras from '../api/palabras.js'

class ControladorPalabras {

    constructor() {
        this.apiPalabras = new ApiPalabras()
    }

    obtenerPalabras = async () => {
        try {
            //console.log(id)
            let palabras = await this.apiPalabras.obtenerPalabras()
            //console.log(palabras)
            return {palabras}
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }

    guardarPalabra = async ({palabra}) => {
        try {
            //console.log(Palabra)
            let palabraAux = {palabra}
            let palabraGuardada = await this.apiPalabras.guardarPalabra(palabraAux)
            //console.log(palabraGuardada)

            return palabraGuardada
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }
}

export default ControladorPalabras

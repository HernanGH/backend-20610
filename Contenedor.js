const fs = require('fs');

class Contenedor {
  // file es la ruta del archivo con respecto a este archivo
  constructor(file) {
    this.file = file;
  }
  
  async save(mascota) {
    try {
      // 1 leemos el archivo para determinar el id
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
  
      let mascotas = [];

      // 2 determinar el id nuevo

      // si esta vacio el archivo, id = 1
      if (contenido === '') {
        mascota.id = 1;
        mascotas.push(mascota);
      } else {
        // si esta vacio el archivo, id ultimo mas 1
        const listaDeMascota = JSON.parse(contenido);
    
        mascota.id = listaDeMascota[listaDeMascota.length - 1].id + 1;
        listaDeMascota.push(mascota);
        mascotas = listaDeMascota;
      }
  
      // 3 guardar la mascota nueva con el id determinado
      const mascotasString = JSON.stringify(mascotas, null, 2);
      await fs.promises.writeFile(`./${this.file}`, mascotasString);

      // 4 retornar el id creado
      return mascota.id;
    } catch (error) {
      console.error('Error:', error);
    };
  }

  async getAll() {
    try {
      // 1 leemos el archivo
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
      const listaDeMascota = JSON.parse(contenido);
      // 2 retornamos el array
      return listaDeMascota;
    } catch (error) {
      console.error('Error:', error);
    };
  }

  async getById(numero) {
    const path = `./${this.file}`;
    try {
        const readJSON = JSON.parse(await fs.promises.readFile(path, "utf-8"));
        const objId = readJSON.find(({ id }) => id === numero);
        if (!objId) return null;
        return objId;
    } catch (error) {
        console.log("Hubo un error: ", error);
    }
}

  async deleteAll() {
    try {
      // 1 vaciamos el archivo
      await fs.promises.writeFile(`./${this.file}`, '');
    } catch (error) {
      console.error('Error:', error);
    };
  }

  async update(id, element) {
    // obtenemos la lista entera de elementos
    const list = await this.getAll();

    // buscamos el elemento por id a actualizar y tambien indice en la lista
    const elementSaved = list.find((item) => item.id === parseInt(id));
    const indexElementSaved = list.findIndex((item) => item.id === parseInt(id));

    // checkeamos que existe el elemento, sino exite devolvemos null y mostramos error
    if (!elementSaved) {
      console.error(`Elemento con el id: '${id}' no fue encontrado`);
      return null;
    }

    // armamos el elemento actualizado con lo guardado y lo nuevo
    // ... spread operator
    const elementUpdated = {
      ...elementSaved, // copio todos los atributo de elementSaved en elementUpdated
      ...element // copio y piso todos los atributo de element en elementUpdated
    };

    // ponemos el elemento nuevo en la lista 
    list[indexElementSaved] = elementUpdated;

    // guardamos la lista
    const elementsString = JSON.stringify(list, null, 2);
    await fs.promises.writeFile(`./${this.file}`, elementsString);

    // retornamos el elemento actualizado
    return elementUpdated;
  }
  /*
  async update (prodeditado, id){
    try {
        const productos = await fs.promises.readFile(this.file, 'utf-8');
        if (productos === '') {
            return ("no hay productos en la base de datos");
        } else {
            const arrProds = JSON.parse(productos);
            const edit= arrProds.find(item => item.id === id);
            const existe = arrProds.findIndex(item => item.id === id);

            if (existe !== -1) {
                const updated = {
                    ...edit,
                    ...prodeditado
                }
                arrProds[existe] = updated;
                await fs.promises.writeFile(this.file, JSON.stringify(arrProds, null, 2));
                return ("Producto editado con éxito");
            } else {
                return (`no existe un producto con el id ${id}`);
            }
        }
    }
    catch (err){
        console.log(err);
    }
  }

  async update (num, obj) {
    const path = `./${this.fileName}`;
    try {
        const readJSON = JSON.parse(await fs.promises.readFile(path, "utf-8"));
        const indexId = readJSON.findIndex(({ id }) => id === num);
        if (indexId === -1) return null;
        readJSON.splice(indexId, 1, obj);
        await fs.promises.writeFile(path, JSON.stringify(readJSON, null, 2), "utf-8");
        return console.log(`El producto con el id: ${num} ha sido actualizado exitosamente.`);
    } catch (error) {
        console.log("Hubo un error: ", error);
    }
  }*/
}

module.exports = Contenedor;

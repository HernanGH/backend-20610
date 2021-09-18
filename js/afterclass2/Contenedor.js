const fs = require('fs');

class Contenedor {
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

  async deleteAll() {
    try {
      // 1 vaciamos el archivo
      await fs.promises.writeFile(`./${this.file}`, '');
    } catch (error) {
      console.error('Error:', error);
    };
  }
}

module.exports = Contenedor;
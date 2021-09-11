class Mascota {
  // metodo con el que defino la estructura inicial de mi objeto y recibimos valores
  constructor(nombre, edad, raza, color, esMia, vecinos, alimentosPreferidos) {
    console.log('constructor...'); // se ejecuta con el metodo new
    this.nombre = nombre; // asingacion para guardar los datos en el objeto
    this.edad = edad;
    this.color = color;
    this.raza = raza;
    this.esMia = esMia;
    this.vecinos = vecinos;
    this.alimentosPreferidos = alimentosPreferidos;
  }

  getName() {
    console.log('getName...');
    console.log(this.nombre);
    return this.nombre;
  }

  agregarVecino(vecinoNuevo) {
    console.log('agregarVecino...');
    this.vecinos.push(vecinoNuevo);
  }

  cantidadDeVecinos() {
    console.log('cantidadDeVecinos...');
    console.log(this.vecinos.length);
    return this.vecinos.length;
  }

  agregarAlimentoPreferido(id, nombre) {
    console.log('agregarAlimentoPreferido...');
    this.alimentosPreferidos.push({
      id: id,
      nombre: nombre
    });

    // metodo abreviado
    // this.alimentosPreferidos.push({
    //   id,
    //   nombre
    // });
  }

  getNombresDeAlimentos() {
    let nombres = [];
    this.alimentosPreferidos.forEach(alimento =>{
        nombres.push(alimento.nombre);
    })
    return (
      `${this.nombre} ${nombres}.`
    ); 
  }

  getNombresDeAlimentos2() {
    return this.alimentosPreferidos.map(({ nombre }) => nombre);
  }

}

const miMascota = new Mascota(
  'Terry',
  5,
  'ovejero aleman',
  'marron y negro',
  true,
  ['gato', 'raton', 'tortuga'],
  [{id: 0, nombre: 'hueso'}, {id: 1, nombre: 'pan'}]
);

// const elNombreDeMiMascota = miMascota.getName();
// console.log('elNombreDeMiMascota es: ', elNombreDeMiMascota);

// miMascota.agregarVecino('carpincho');


// console.log('cantidadDeVecinos: ', miMascota.cantidadDeVecinos());

miMascota.agregarAlimentoPreferido(100, 'alimento balanceado');

console.log(miMascota.getNombresDeAlimentos());
console.log(miMascota.getNombresDeAlimentos2());
// console.log(miMascota);

// const tuMascota = new Mascota(
//   'Boby',
//   3,
//   'caniche',
//   'negro',
//   false,
//   ['perro', 'raton'],
//   [{id: 0, nombre: 'hueso'}, {id: 1, nombre: 'pan'}]
// );

// const mascotaAdulta = new Mascota();

// const mascotaJoven = new Mascota();

// console.log(tuMascota);
// console.log(mascotaAdulta);
// console.log(mascotaJoven);
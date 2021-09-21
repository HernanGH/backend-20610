// [...new Array(10000)] crear un array vacio de length = 10000, que se puede recorrer 
// const numeros = [...new Array(10000)].map(() => {
//   return Math.round(Math.random() * 20 * 1);
// });


function getRandom() {
  const list = [];
  for (i = 0; i < 10000; i++){   
      list.push(Math.round(Math.random() * (20 - 1)) + 1);     
  }
  return list;
}

const getCounters = (list) => {
  const result = {};
  list.forEach((number) => {
    if (result[number]) {
      result[number]++;
    } else {
      result[number] = 1;
    }
  })
  return result;
};

// const list = getRandom();

// const counters = getCounters(list);
// console.log(list.length);
// console.log(counters);


// const numeros = {};
// list.forEach((n) => {
//   if (numeros[n]) {
//     numeros[n] += 1;
//   } else {
//     numeros[n] = 1;
//   }
// });
// console.log(numeros);

const productos = [
  { id:1, nombre:'Escuadra', precio:323.45 },
  { id:2, nombre:'Calculadora', precio:234.56 },
  { id:3, nombre:'Globo Terráqueo', precio:45.67 },
  { id:4, nombre:'Paleta Pintura', precio:456.78 },
  { id:5, nombre:'Reloj', precio:67.89 },
  { id:6, nombre:'Agenda', precio:78.90 }
];

const getNombres = (list) => list.map((item) => item.nombre).join(', ');

const getTotal = (list) => {
  let total = 0;
  list.forEach((item) => {
    total += item.precio;
  });
  return total.toFixed(2);
};

const getPromedio = (list) => (getTotal(list) / list.length).toFixed(2);

const getMenor = (list) => {
  list.sort((actual, siguiente) => {
    return actual.precio - siguiente.precio;
  }); 
  // return list.shift();
  return list[0];
};
// console.log(getMenor(productos));

const getMayor = (list) => {
  list.sort((actual, siguiente) => {
    return actual.precio - siguiente.precio;
  }); 
  // return list.pop(); 
  return list[list.length - 1];
};
// console.log(getMayor(productos));


// function getNames(productos){
//   for (let i = 0; i <productos.length ; i++) {
//       a.push(productos[i].nombre)
//   }
//   return a
// }

// const a= [];
// getNames(productos)
// console.log(a.join(', '))
// console.log(JSON.stringify(a))

// function obtenerNombres(productos){
//   return(productos.map(({ nombre }) => nombre));
// }
// console.log(obtenerNombres(productos).join(', '));

const getResults = (list) => ({
  nombres: getNombres(list),
  total: getTotal(list),
  promedio: getPromedio(list),
  menor: getMenor(list),
  mayor: getMayor(list)
});

// console.log(getResults(productos));

// let totalPrice =0;
// function calculateTotalPrice(productos){
//     for (let i = 0; i <productos.length ; i++) {
//         totalPrice = totalPrice + productos[i].precio
//     }
//     return Math.round(totalPrice*100)/100
// }

// console.log(calculateTotalPrice(productos))

// let average = 0;
// function calculateAverage(productos){
//     let acum = 0
//     for (let i = 0; i < productos.length; i++) {

//         acum = acum + productos[i].precio
//         average = acum/productos.length

//     }
//     return Math.round(average*100)/100
// }

// console.log(calculateAverage(productos))

// const nombres = productos.map(({ nombre }) => nombre).join(", ");
// console.log(nombres);
// let suma = 0;
// for (let i = 0; i < productos.length; i++) {
//     suma = suma + productos[i].precio;
// }
// const promedio = suma/productos.length;
// const menor = Math.min(...productos.map(({ precio })=> precio));
// const mayor = Math.max(...productos.map(({ precio })=> precio));
// const obj = {
//     A: nombres,
//     B: suma,
//     C: promedio,
//     D: menor,
//     E: mayor
// }
// console.log(obj)

const list = [1, 2, 3];
console.log({list});

const listaBorrador = [...list]; // COPIA DE CONTENIDO
const listaBorradorTrucha = list; // COPIA DE REFERENCIA

console.log({listaBorrador});
console.log({listaBorradorTrucha});

list.push(4);

console.log({list});
console.log({listaBorrador});
console.log({listaBorradorTrucha});
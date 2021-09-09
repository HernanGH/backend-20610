// let nombre = "coder house";

// console.log(nombre);

// nombre = "CODER HOUSE 2";

// console.log(nombre);

/// LET GLOBAL ///

// let i = 0; // ES GLOBAL

// function mostrarIyJ() {
//   i = 1;
//   let j = 2; // NO ES GLOBAL
//   if (true) {
//     console.log(i);
//     console.log(j);
//   }
// }
// mostrarIyJ();

/// DOBLE LET  ///

// function dobleLet() {
//   let i = 0;
//   if (true) {
//     let i = 1;
//     console.log(i);
//   }
//   console.log(i);
// }
// dobleLet();

// ERROR FUERA DE ALCANCE // SCOPE

// function outOfScope() {
//   if (true) {
//     let i = 1; // VARIBLE INTERNA AL ALCANCE DEL IF
//   }
//   console.log(i); // ERROR VARIABLE NO ALCANZABLE
// }

// outOfScope();


// ERROR CONST ////

// const i = 0;
// i = 1;

// MUTACION // 

// const usuario = { nombre: "coder" };
// console.log(usuario);

// RE-ASIGNO UNA PROPIEDAD INTERNA DEL OBJETO
// usuario.nombre = "house";

// console.log(usuario);

// FUNCIONES CON NOMBRE //
// function hello(nombre) {
//   console.log('HOLA ' + nombre);
// }

// hello('coder');
// console.log(nombre) // VARIABLE NO ALCANZADA

// FUNCIONES ANONIMA //

// const myFunction = function() {
//   console.log('No tengo nombre');
// }

// myFunction();

// FUNCION QUE DEVUELVE OTRA FUNCION //

// function crearLaFuncionSaludar() {
//   return function() {
//     console.log('Hola!!!');
//   }
// }

// NOS DEVUELVE LA FUNCION QUE QUEREMOS
// const funcionSaludar = crearLaFuncionSaludar();

// // EJECUTAMOS LA FUNCION QUE NOS DEVOLVIO LA OTRA FUNCION
// funcionSaludar();

// IIFE FUNCION INVOCADA INMEDIATAMENTE //

// (function () {
//   console.log('ME CREO Y ME EJECUTO RAPIDISIMO')
// })()

// CLOSURE //

// function crearGritarNombre(nombre) {
//   const exclamacion = '!!!';
//   return function () {
//     console.log(`${nombre}${exclamacion}`);
//   }
// }

// const gritarCoder = crearGritarNombre('coder');

// gritarCoder();

// PUNTO 1

// const datos = [
//   {
//     user: "coder",
//   },
//   {
//     user: "house",
//   },
// ];

// function mostrarLista(datos) {
//   if (datos.length === 0) {
//     console.log("lista vacia");
//   } else {
//     console.log(datos);
//   }
// }

// mostrarLista(datos);

// PUNTO 2

// (function (lista) {
//   if(!lista || lista.length === 0)
//     return console.log(`La lista esta vacia`);
  
//   return console.log(lista);
// })([1,2,3]);

// PUNTO 3

function crearMultiplicador(multiplicador) {
  return function(numeroParaMultiplicar) {
    return numeroParaMultiplicar * multiplicador;
  } 
}
const duplicar = crearMultiplicador(2);
// function duplicar(num) {
//   const dos = crearMultiplicador(2)
//   return dos(num)
// }

const triplicar = crearMultiplicador(3);
// function triplicar(num) {
//   const tres = crearMultiplicador(3)
//   return tres(num)
// }

console.log(duplicar(5));

console.log(triplicar(2));

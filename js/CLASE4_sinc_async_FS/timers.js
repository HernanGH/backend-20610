//////////// setTimeout //////
// setTimeout(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 3 SEGUNDOS UNA UNICA VEZ');
// }, 3000);

// setTimeout(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 1 SEGUNDOS UNA UNICA VEZ');
// }, 1000);

// setTimeout(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 4 SEGUNDOS UNA UNICA VEZ');
// }, 4000);


//////////// setInterval //////
// setInterval(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR CADA DE 3 SEGUNDOS MUCHAS VECES');
// }, 3000);

// setInterval(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 1 SEGUNDOS MUCHAS VECES');
// }, 1000);

// setInterval(() => {
//   console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 4 SEGUNDOS MUCHAS VECES');
// }, 4000);

const interval = setInterval(() => {
  console.log('ESTE MENSAJE SE VA A MOSTRAR DESPUES DE 1 SEGUNDOS MUCHAS VECES');
}, 1000);

console.log(interval);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

// RESOLUCION DE PRACTICA DE TIMERS
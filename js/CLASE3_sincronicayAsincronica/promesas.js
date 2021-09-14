// PROMESA
/*
function dividir(dividendo, divisor) {
  // SIEMPRE TENGO QUE RETORNAR LA PROMESA
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      // SALE MAL, va por el catch
      reject('no se puede dividir por cero')
    } else {
      // SALE BIEN, va por el then
      resolve(dividendo / divisor)
    }
  })
}
 
dividir(10, 2)
  .then(resultado => {
    console.log(`resultado: ${resultado}`)
  })
  .catch(error => {
    console.log(`error: ${error}`);
})

// CALLBACK

function dividir(dividendo, divisor, callback) {
  if (divisor == 0) {
    // SALE MAL, envio el error como 1er parametro
    callback('no se puede dividir por cero');
  } else {
    // SALE BIEN, envio null como 1er parametro y el resultado como el 2do parametro
    callback(null, dividendo / divisor);
  }
}
 
dividir(10, 0 , (error, resultado) => {
  if (error) {
    console.log(`error: ${error}`);
  } else {
    console.log(`resultado: ${resultado}`);
  }
});*/

// PROMESAS ANIDADAS
const value = 10;

Promise.reject(30)
  .then(value => value + 1) // 21 // 11
  .then(value => value * 2) // 42  // 22
  .then(value => {
    if (value === 22) throw 'Error 22' // 10 -> error  // throw === reject
    else return 80; // por aca
  })
  .then(value => 30) // 30
  .then( x => x / 2 ) // 15
  .then((res) => console.log(res) )
  .catch( console.log );

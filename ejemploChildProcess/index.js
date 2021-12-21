const { fork } = require('child_process')

const forked = fork('child.js')

forked.on('message', msg => {
    console.log('Mensaje del hijo ', msg)
})

console.log('Comienzo del programa Padre')
setTimeout(() => {
    forked.send({mensaje: 'Hola!'})
},2000)


///////
// const numeros = getRamdonNums();

// const result = {
//     '8': 'aparaciones 4 veces',
//     '2': 'aparaciones 3 veces'
// }
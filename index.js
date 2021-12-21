
// while (true) {
//   process.on('exit', (code) => {
//     console.log('EXIT PROCESS', code);
//   })
//   console.log(Date.now())
//   process.exit(3)

// }

// console.log('HOLA ya termino');

// process.on('beforeExit', (code) => {
//   console.log('BEFORE EXIT PROCESS', code);
// })

// process.on('uncaughtException', (err) => console.log('Error: ', err));

// setTimeout(() => console.log('Running...'), 500);

// asd();
// console.log('No se ejecuta');

// console.log(process.execPath);

// process.stdout.write(process.execPath + '\n');

console.log(process.argv)
const args = require('yargs/yargs')(process.argv.slice(2));

args
  .default({
    modo: 'prod', puerto: 0, debug: false
  })
  .alias({
    m: 'modo', d: 'debug', p: 'puerto', '_': 'otros'
  });


// const options = {
//   default: { modo: 'prod', puerto: 0, debug: false },
//   alias: { m: 'modo', d: 'debug', p: 'puerto', '_': 'otros' }
// };

const argumentos = {...args.argv};

argumentos.otros = argumentos._;
delete argumentos._;
delete argumentos.d;
delete argumentos.m;
delete argumentos.p;

console.log(argumentos);

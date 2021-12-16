const minimist = require('minimist');

const options = {
  default: { modo: 'prod', puerto: 0, debug: false },
  alias: { m: 'modo', d: 'debug', p: 'puerto', '_': 'otros' }
};

const argumentos = minimist(process.argv.slice(2), options);

argumentos.otros = argumentos._;
delete argumentos._;
delete argumentos.d;
delete argumentos.m;
delete argumentos.p;

console.log(argumentos);

const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, 'example.env')
});

const config = {
  modo: process.env.MODO || 'prod',
  puerto: parseInt(process.env.PUERTO) || 0,
  debug: Boolean(process.env.DEBUG) || false
}

console.log({
  config
});
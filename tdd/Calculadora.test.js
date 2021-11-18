const assert = require('assert');
const Calculadora = require('./Calculadora');

const testSuma = () => {
  try {
    const resultado = Calculadora.suma(3,5);

    assert.equal(8, resultado);
    
    console.log('Test success integer');

    const resultadoFloat = Calculadora.suma(3.4,5.1);

    assert.equal(8.5, resultadoFloat);
    
    console.log('Test success float');

  } catch (error) {
    console.log('Error: test failed', error.message);
  }
}

testSuma();
let {op,n1,n2} = require('yargs').argv;

n1 = Number(n1)
n2 = Number(n2)

console.log(eval(`${n1}${op}${n2}`))

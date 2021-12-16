console.log('process.argv: ',process.argv);
let [op, n1, n2] = process.argv.slice(2)

n1 = Number(n1)
n2 = Number(n2)

console.log(eval(`${n1}${op}${n2}`))

const response = await fetch('http://localhost:8080')

const data = await response.text()

console.log(data)
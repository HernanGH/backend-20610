import axios from 'axios'
import got from 'got'

// .catch((error)=> console.error(error.message))

// const miFuncion = (err) => console.log(err)
// console.error
// console.log
// catch(miFuncion)
// catch(console.log)

axios.get('http://localhost:8080/')
  .then(({ data })=> console.log(data))
  .catch(({ message })=> console.error(`Error: ${message}`))

got.get('http://localhost:8080/')
  .then(({ body }) => console.log(body))
  .catch(({ message })=> console.error(`Error: ${message}`))

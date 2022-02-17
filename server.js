import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    FyH: new Date().toLocaleString()
  })
})

app.listen(8080, () => console.log('Server running in port 8080'))


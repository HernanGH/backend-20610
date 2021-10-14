const express = require('express');
const app = express();
const productosRouter = require('./routers/productos');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {

  res.render('pages/index', {
  });
});

app.use(productosRouter)


const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
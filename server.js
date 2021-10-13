const express = require('express');
const app = express();
const productosRouter = require('./routers/productos');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  // const mascots = [
  //   { name: 'Sammy' },
  //   { name: 'Tux' },
  //   { name: 'Moby Dock' },
  //   { name: 'Pug' },
  //   { name: 'Firulaus' }
  // ];
  // const tagline = 'Mascots';

  res.render('pages/index', {
  });
});

app.use(productosRouter)


const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
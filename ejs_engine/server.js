const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const mascots = [
    { name: 'Sammy' },
    { name: 'Tux' },
    { name: 'Moby Dock' },
  ];
  const tagline = 'Mascots';

  res.render('pages/index', { mascots: mascots, tagline: tagline });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {});
});


const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
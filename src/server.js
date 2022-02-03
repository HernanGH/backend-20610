const express = require('express');

const router = require('./routers');

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true }) );

app.get('/', (req,res) => res.send({ data: Date.now() }))

app.use(router);

app.listen(8080, () => 
  console.log(`Servidor abierto en http://localhost:${8080}/`)
);

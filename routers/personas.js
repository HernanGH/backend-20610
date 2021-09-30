const express = require('express');

const Contenedor = require('../Contenedor');

const personasContenedor = new Contenedor('./data/personas.json');

// const { Router } = express
// const router = Router()
const personasRouter = express.Router();

personasRouter.get('/', async (req, res) => {
  const lista = await personasContenedor.getAll();
  res.send({
    message: 'success',
    data: lista
  });
})

personasRouter.post('/', async (req, res) => {
  const newPerson = req.body;

  const idPersonSaved = await personasContenedor.save(newPerson);

  res.send({
    message: 'success',
    data: {
      ...newPerson,
      id: idPersonSaved
    }

  });
})

module.exports = personasRouter;

console.log(__dirname);

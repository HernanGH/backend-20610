```mongo ecommerce // mongo    use ecommerce

db.createCollection('messages')

db.createCollection('products')

db.messages.insertMany([
  { author: 'hernan', text: 'hola' },
  { author: 'abel', text: 'hola' },
  { author: 'andres', text: 'hola' },
  { author: 'juan', text: 'hola' },
  { author: 'mathias', text: 'hola' }
])

db.products.insertMany([
  { name: 'product1', description: '', code: 100, photo: '', price: 100, stock: 20 },
  { name: 'product2', description: '', code: 101, photo: '', price: 150, stock: 20 },
  { name: 'product3', description: '', code: 102, photo: '', price: 300, stock: 20 },
  { name: 'product4', description: '', code: 103, photo: '', price: 250, stock: 20 },
  { name: 'product5', description: '', code: 104, photo: '', price: 180, stock: 20 },
  { name: 'product6', description: '', code: 105, photo: '', price: 4500, stock: 20 },
  { name: 'product7', description: '', code: 106, photo: '', price: 1500, stock: 20 },
  { name: 'product8', description: '', code: 107, photo: '', price: 2000, stock: 20 },
  { name: 'product9', description: '', code: 108, photo: '', price: 3000, stock: 20 },
  { name: 'product10', description: '', code: 109, photo: '', price: 5000, stock: 20 }
])


db.messages.find().pretty()

db.products.find().pretty()

db.messages.count()

db.products.count()
```

// create
db.products.insertOne({
  name: 'product11', description: '', code: 110, photo: '', price: 4900, stock: 10
})
```
// read
db.products.find({
  name: 'product11'
}).pretty()
```


#### Listar los productos con precio menor a 1000 pesos

```
db.products.find({price: {$lt: 1000}})
```

#### Listar los productos con precio entre 1000 a 3000 pesos

```
db.products.find({$and: [{price: {$gt: 1000}}, {price: {$lt: 3000}}]})
```

#### Listar los productos con precio mayor a 3000 pesos

```
db.products.find({price: {$gt: 3000}})
```

#### Realizar una consulta que traiga sólo el nombre del tercer producto más barato.

```
db.products.find({}, { name: 1, _id: 0 }).sort({price: 1}).skip(2).limit(1)
```

#### Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100

```
db.products.updateMany({}, { $set: { stock: 100 } })
```

#### Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 

```
db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
```

#### Borrar los productos con precio menor a 1000 pesos

```
db.products.deleteMany({ price: { $lt: 1000 } })
```

#### Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información

use admin

mongod --auth

mongo -u pepe -p asd456 --authenticationDatabase ecommerce

```
db.createUser({
  user: 'pepe',
  pwd: 'asd456',
  roles: [
    { role: 'read', db: 'ecommerce'}
  ]
})
```

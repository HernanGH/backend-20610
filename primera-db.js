// use sistema;

db.usuarios.insert({ "nombre": 'juan', "edad": 30 });

db.usuarios.find();

// show collections;


db.usuarios.insert({ "nombre": 'pedro', "edad": 32 });
db.usuarios.insert({ "nombre": 'matias', "edad": 33 });
db.usuarios.insert({ "nombre": 'casandra', "edad": 40 });

db.usuarios.find();

db.productos.insert({ "nombre": 'product', "precio": 10, "stock": 100 });
db.productos.insert({ "nombre": 'product1', "precio": 20, "stock": 150 });
db.productos.insert({ "nombre": 'product2', "precio": 30, "stock": 200 });
db.productos.insert({ "nombre": 'product3', "precio": 40, "stock": 300 });

// show collections;

db.productos.find();


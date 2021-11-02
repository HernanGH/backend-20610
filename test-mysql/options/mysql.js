const options = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'testdb'
  },
  pool: { min: 0, max: 7 }
};

module.exports = { 
  options
};

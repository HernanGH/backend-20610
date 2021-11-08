const options = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'testdb'
  },
  pool: { min: 0, max: 7 }
};

const sqliteOptions = {
  client: 'sqlite3',
  connection: { filename: './DB/ecommerce.sqlite'},
  useNullAsDefault: true
}

module.exports = { 
  options,
  sqliteOptions
};

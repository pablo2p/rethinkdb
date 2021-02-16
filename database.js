const r = require('rethinkdb');
const config = require('./config.json');
let conn;

r.connect(config.rethinkdb)
  .then((connection) => {
    console.log('Conectando');
    conn = connection;
    return r.dbCreate('pokemon').run(conn);
  })
  .then(() => {
    console.log('A database pokemon foi criada!');
    return r.db('pokemon').tableCreate('player').run(conn);
  })
  .then(() => console.log('Tabela player criada'))
  .error((err) => console.log(err))
  .finally(() => process.exit(0));

const { Pool } = require('pg');

const pool = new Pool({
  user: 'mytestuser',
  host: 'localhost',
  database: 'more_homes',
  password: 'password',
  port: 5432,
});

pool.on('connect', () => {
  console.log('SUCCESSFULLY CONNECTED TO DB');
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
}
const { Pool } = require('pg');

// UPDATE THESE VARIABLES ONCE DEPLOYED
const USER = 'mytestuser';
const DATABASE = 'more_homes';
const HOST = 'localhost';
const PASSWORD = 'password';
const PORT = 5432;

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});

pool.on('connect', () => {
  console.log(`Successfully connected to database with user ${USER} at host ${HOST} on port ${PORT}`);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

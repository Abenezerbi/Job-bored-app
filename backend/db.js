require('dotenv').config();
const { Pool } = require('pg');

console.log('DB User:', process.env.PG_USER);
console.log('DB Password:', process.env.PG_PASSWORD);
console.log('DB Host:', process.env.PG_HOST);
console.log('DB Port:', process.env.PG_PORT);
console.log('DB Database:', process.env.PG_DATABASE);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: String(process.env.PG_PASSWORD),
  port: parseInt(process.env.PG_PORT) || 5432,
  ssl: false
});

pool.on('error', (err) => {
  console.error('Database error:', err.message);
});

module.exports = pool;

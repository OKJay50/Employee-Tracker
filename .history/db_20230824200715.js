// db.js
const mysql = require('mysql2/promise'); // Using the promise version

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost', // Your MySQL host
  user: 'EOSILANDER', // Your MySQL username
  password: 'Erina0322$', // Your MySQL password
  database: 'employee_db' // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

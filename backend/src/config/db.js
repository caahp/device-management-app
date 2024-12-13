const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Luke202@', 
  database: 'device_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Verify the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error while connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database with id ' + connection.threadId);
});

module.exports = pool;

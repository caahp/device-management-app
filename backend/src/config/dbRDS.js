// Configs of the RDS database
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'device-management-db.cx66ye2cuxg3.us-east-1.rds.amazonaws.com',
  user: 'admin', 
  password: 'x',
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
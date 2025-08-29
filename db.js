import mysql from 'mysql2/promise';

export function createPool() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'ems',
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true
  });
  return pool;
}

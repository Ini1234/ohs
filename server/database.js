import dotenv from 'dotenv';

import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProd ? process.env.DATABASE_URL : connectionString,
});

// const pool = new Pool({
//   user: 'ini',
//   password: 'admin',
//   host: 'localhost',
//   port: 5432,
//   database: 'ohs',
// });

// const createTblQry = `CREATE TABLE users (
//   user_id serial PRIMARY KEY,
//   username VARCHAR(50) UNIQUE NOT NULL,
//   password VARCHAR (50) NOT NULL,
//   email VARCHAR (50) UNIQUE NOT NULL,
//   first_name VARCHAR (50) NOT NULL,
//   last_name VARCHAR (50) NOT NULL
// );`;

// pool
//   .query(createTblQry)
//   .then((Response) => {
//     console.log('Table Created');
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export default pool;

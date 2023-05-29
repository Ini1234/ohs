import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
// import usersRoute from './routes/users.js';
import cors from 'cors';
import pool from './database.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRoute);

// For Handling errors
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'An error has occurred';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

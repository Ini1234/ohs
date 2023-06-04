import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import cors from 'cors';
import pool from './database.js';
import path from 'path';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Global Middlewares
app.use(cors());
app.options('*', cors());
// Access-Control-Allow-Origin *

// Set Security Https Headers
app.use(helmet());

// Serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, '../client/dist');

app.use(express.static(buildPath));

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/dist/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Body Parser
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

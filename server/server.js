import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import cors from 'cors';
import pool from './database.js';
import path from 'path';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './controllers/errorController.js';

dotenv.config();

const app = express();

// Global Middlewares
app.use(cors());
// app.options('*', cors());
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

// Routes
app.use('/api/v1/auth', authRoute);

//Unhandled Routes
app.all('*', (req, res, next) => {
  next(new AppError(`${req.originalUrl} can't be found on this server!`, 404));
});

// For Handling errors
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

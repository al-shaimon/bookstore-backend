import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config/config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) return callback(null, true);

      // Allow all subdomains of alshaimon.com
      const allowedDomains = [
        /\.alshaimon\.com$/, // Any subdomain of alshaimon.com
        /^https?:\/\/alshaimon\.com$/, // Main domain
        /^http:\/\/localhost:\d+$/, // Localhost for development
      ];

      const isAllowed = allowedDomains.some((pattern) => pattern.test(origin));

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);

// Welcome route
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome To Book Store MERN Stack Project');
});

// Books routes
app.use('/books', booksRoute);

// Connect to MongoDB and start server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

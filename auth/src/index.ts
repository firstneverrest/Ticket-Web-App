import express from 'express';
import { json } from 'body-parser';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/notFoundError';
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(ticketRoutes);
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
};

// app.get('*', (req, res, next) => {
//   next(new NotFoundError());
// });

app.listen(3000, () => {
  console.log('Auth Service is running on port 3000');
});

start();

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/notFoundError';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true); // trust ingress proxy
app.use(json());
app.use(
  cookieSession({
    signed: false, // no encryption
    secure: true, // force https
  })
);

app.use(ticketRoutes);
app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('Missing env variable JWT_KEY');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
};

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.listen(3000, () => {
  console.log('Auth Service is running on port 3000');
});

start();

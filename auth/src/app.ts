import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true); // trust ingress proxy
app.use(json());
app.use(
  cookieSession({
    signed: false, // no encryption
    secure: process.env.NODE_ENV !== 'test', // force https
  })
);

app.use(ticketRoutes);
app.use(errorHandler);

export default app;

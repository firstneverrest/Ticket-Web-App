import express from 'express';
import { json } from 'body-parser';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/notFoundError';

const app = express();
app.use(json());

app.use(ticketRoutes);
app.use(errorHandler);

app.get('*', (req, res, next) => {
  next(new NotFoundError());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

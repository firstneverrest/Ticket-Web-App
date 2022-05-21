import express from 'express';
import { json } from 'body-parser';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(json());

app.use(ticketRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

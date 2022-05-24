import app from './app';
import mongoose from 'mongoose';

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

// app.all('*', async (req: Request, res: Response) => {
//   throw new NotFoundError();
// });

app.listen(3000, () => {
  console.log('Auth Service is running on port 3000');
});

start();

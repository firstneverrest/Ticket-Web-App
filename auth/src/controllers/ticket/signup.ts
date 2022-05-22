import { Request, Response } from 'express';
import { User } from '../../models/user';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/badRequestError';

const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  const user = User.build({ email, password });
  await user.save();

  // Generate JWT and store it in session object
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};

export default signup;

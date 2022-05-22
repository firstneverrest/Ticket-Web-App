import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../../models/user';
import { RequestValidationError } from '../../errors/requestValidationError';
import { BadRequestError } from '../../errors/badRequestError';
// import { DatabaseConnectionError } from '../../errors/databaseConnectionError';
import jwt from 'jsonwebtoken';

const signup = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

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

import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const signup = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({
    //   errors: errors.array(),
    // });
    if (!errors.isEmpty()) {
      throw new Error('Invalid email or password');
    }
  }

  const { email, password } = req.body;

  console.log('Creating a user...');

  throw new Error('Error connecting to database');
  // res.status(200).json({
  //   email,
  //   password,
  // });
};

export default signup;

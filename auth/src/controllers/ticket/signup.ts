import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../../errors/requestValidationError';
import { DatabaseConnectionError } from '../../errors/databaseConnectionError';

const signup = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  throw new DatabaseConnectionError();
  // res.status(200).json({
  //   email,
  //   password,
  // });
};

export default signup;

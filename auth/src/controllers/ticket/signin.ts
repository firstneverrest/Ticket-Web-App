import express, { Request, Response } from 'express';

const signin = (req: Request, res: Response) => {
  res.send('currentuser');
};

export default signin;

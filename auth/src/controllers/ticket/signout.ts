import express, { Request, Response } from 'express';

const signout = (req: Request, res: Response) => {
  res.send('currentuser');
};

export default signout;

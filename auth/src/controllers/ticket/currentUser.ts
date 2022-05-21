import express, { Request, Response } from 'express';

const currentUser = (req: Request, res: Response) => {
  res.send('currentuser');
};

export default currentUser;

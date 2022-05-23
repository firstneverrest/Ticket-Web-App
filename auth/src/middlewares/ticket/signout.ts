import { Request, Response, NextFunction } from 'express';

const signout = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default signout;

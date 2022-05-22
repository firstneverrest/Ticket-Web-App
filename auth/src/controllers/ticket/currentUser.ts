import { Request, Response } from 'express';

const currentUser = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};

export default currentUser;

import express from 'express';
import { currentUser, signin, signout, signup } from '../controllers/ticket';
import {
  currentUserMiddleware,
  signinMiddleware,
  signoutMiddleware,
  signupMiddleware,
} from '../middlewares/ticket';

const router = express.Router();

// current user
router.get('/api/users/currentuser', currentUserMiddleware, currentUser);
router.post('/api/users/signin', signinMiddleware, signin);
router.post('/api/users/signout', signoutMiddleware, signout);
router.post('/api/users/signup', signupMiddleware, signup);

export default router;

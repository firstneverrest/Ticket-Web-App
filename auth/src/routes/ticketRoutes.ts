import express from 'express';
import { currentUser, signin, signout, signup } from '../controllers/ticket';
import { requireAuth } from '../middlewares/requireAuth';
import {
  currentUserMiddleware,
  signinMiddleware,
  signoutMiddleware,
  signupMiddleware,
} from '../middlewares/ticket';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

// current user
router.get(
  '/api/users/currentuser',
  currentUserMiddleware,
  validateRequest,
  requireAuth,
  currentUser
);
router.post('/api/users/signin', signinMiddleware, validateRequest, signin);
router.post('/api/users/signout', signoutMiddleware, validateRequest, signout);
router.post('/api/users/signup', signupMiddleware, validateRequest, signup);

export default router;

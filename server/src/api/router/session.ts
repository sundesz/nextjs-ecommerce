import { Router } from 'express';
import SessionController from '../controller/session';

const SessionRouter = Router();

SessionRouter.get('/sessions/:id', SessionController.getSession);
SessionRouter.post('/sessions/', SessionController.createSession);
SessionRouter.put('/sessions/:id', SessionController.updateSession);
SessionRouter.delete('/sessions/:id', SessionController.deleteSession);

SessionRouter.post('/login', SessionController.login);
SessionRouter.post('/logout', SessionController.logout);

export default SessionRouter;

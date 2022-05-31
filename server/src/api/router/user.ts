import { Router } from 'express';
import UserController from '../controller/user';

const UserRouter = Router();

UserRouter.get('/create', UserController.createUser);

export default UserRouter;

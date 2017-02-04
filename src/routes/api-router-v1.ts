import * as Router from 'koa-router';
import UserController from '../api/v1/controllers/UserController';

const router = new Router();

// user
const usersRouter = new Router();
usersRouter.get('/', UserController.getAllUsers);

router.use('/users', usersRouter.routes(), usersRouter.allowedMethods());

export default router;

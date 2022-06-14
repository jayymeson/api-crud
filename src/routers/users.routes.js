import { Router } from 'express';
import UsersControllers from '../controllers/users.controllers.js';

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get('', usersControllers.allUsers);
usersRouter.get('/:id', usersControllers.listUsersById);
usersRouter.post('/create-users', usersControllers.creatNewUsers);
usersRouter.put('/update-users/:id', usersControllers.updateUsers);
usersRouter.delete('/delete-users/:id', usersControllers.deleteUsers)


export default usersRouter;

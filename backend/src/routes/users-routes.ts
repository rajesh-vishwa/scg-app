import { Router } from "express";
import { getUsers, getUserById } from "../controllers/users-controller";

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:userId', getUserById);
export default usersRouter;

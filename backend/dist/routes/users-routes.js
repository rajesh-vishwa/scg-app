"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users-controller");
const usersRouter = express_1.Router();
usersRouter.get('/', users_controller_1.getUsers);
usersRouter.get('/:userId', users_controller_1.getUserById);
exports.default = usersRouter;

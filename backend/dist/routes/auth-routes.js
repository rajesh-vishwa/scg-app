"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth-controller");
const authRouter = express_1.Router();
authRouter.post("/", auth_controller_1.authenticateUser);
exports.default = authRouter;

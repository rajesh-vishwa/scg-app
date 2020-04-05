"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin-controller");
// import auth from "../middlewares/auth.middleware";
const adminRouter = express_1.Router();
// userRouter.get("/me", auth, getUser);
adminRouter.post("/", admin_controller_1.registerUser);
exports.default = adminRouter;

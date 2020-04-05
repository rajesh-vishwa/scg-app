"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_util_1 = require("../utils/validate.util");
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.authenticateUser = async (req, res, next) => {
    // validation
    const login = req.body;
    const { error } = validate_util_1.validateLogin(login);
    if (error) {
        res.status(400).json(error.details[0].message);
        return;
    }
    let user = await user_model_1.User.findOne({ mobile: login.mobile });
    if (!user)
        return res.status(400).send("Invalid mobile or password.");
    const validPassword = await bcrypt_1.default.compare(login.password, user.password);
    if (!validPassword)
        return res.status(400).send("Invalid mobile or password.");
    const token = user.generateAuthToken();
    res.json(token);
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_util_1 = require("../utils/validate.util");
const user_model_1 = require("../models/user.model");
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const player_model_1 = require("./../models/player.model");
exports.registerUser = async (req, res, next) => {
    // validation
    const registerUser = req.body;
    const { error } = validate_util_1.validateUserOnRegister(registerUser);
    if (error) {
        res.status(400).json(error.details[0].message);
        return;
    }
    // validate mobile number of player
    let user = await user_model_1.User.findOne({ mobile: registerUser.mobile });
    if (user)
        return res.status(400).json("This mobile number already registerd.");
    user = new user_model_1.User(lodash_1.default.pick(registerUser, ["mobile", "password"]));
    // hashing password
    const salt = await bcrypt_1.default.genSalt(8);
    user.password = await bcrypt_1.default.hash(user.password, salt);
    // save user
    await user.save();
    // save plyer
    let player = new player_model_1.Player({
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        nickName: registerUser.nickName,
        email: registerUser.email,
        userId: user._id
    });
    await player.save();
    res.json(player);
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
function validateUserOnRegister(user) {
    const schema = {
        firstName: joi_1.default.string()
            .min(3)
            .max(100)
            .required(),
        lastName: joi_1.default.string()
            .min(3)
            .max(100)
            .required(),
        nickName: joi_1.default.string()
            .min(2)
            .max(50)
            .required(),
        email: joi_1.default.string()
            .min(3)
            .max(255)
            .required()
            .email(),
        mobile: joi_1.default.string()
            .min(10)
            .max(10)
            .required(),
        password: joi_1.default.string()
            .min(3)
            .max(255)
            .required()
    };
    return joi_1.default.validate(user, schema);
}
exports.validateUserOnRegister = validateUserOnRegister;
function validateLogin(login) {
    const schema = {
        mobile: joi_1.default.string()
            .min(10)
            .max(10)
            .required(),
        password: joi_1.default.string()
            .min(3)
            .max(255)
            .required()
    };
    return joi_1.default.validate(login, schema);
}
exports.validateLogin = validateLogin;

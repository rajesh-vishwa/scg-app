"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const checkEnvVariables = () => {
    // check jwtprivateKey
    if (!config_1.default.get("jwtPrivateKey")) {
        throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
    }
    // check jwtprivateKey
    if (!config_1.default.get("dbConn")) {
        throw new Error("FATAL ERROR: mongoDB connection is not defined.");
    }
};
exports.default = checkEnvVariables;

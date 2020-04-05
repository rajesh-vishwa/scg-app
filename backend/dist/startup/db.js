"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import winston from "winston";
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB() {
    mongoose_1.default.connect(config_1.default.get("dbConn")).then(() => 
    // winston.info(`connected to db at ${new Date().toLocaleString()}`)
    console.log(`connected to dbConn: ${config_1.default.get("dbConn")}  at ${new Date().toLocaleString()}`));
}
exports.connectDB = connectDB;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_check_1 = __importDefault(require("./startup/config-check"));
const db_1 = require("./startup/db");
const routes_1 = require("./startup/routes");
const cors_1 = __importDefault(require("cors"));
const server = express_1.default();
// check if all env variables declared.
server.use(cors_1.default());
config_check_1.default();
db_1.connectDB();
routes_1.routes(server);
// port and listen
const port = process.env.PORT || 4200;
server.listen(port, () => {
    console.log(`SCG Api running on ${port} at ${new Date().toLocaleString()}`);
});

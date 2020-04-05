"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const users_routes_1 = __importDefault(require("../routes/users-routes"));
const error_middleware_1 = __importDefault(require("../middlewares/error-middleware"));
const http_error_1 = require("./../models/http-error");
const admin_routes_1 = __importDefault(require("./../routes/admin-routes"));
const auth_routes_1 = __importDefault(require("../routes/auth-routes"));
function routes(server) {
    server.use(body_parser_1.json());
    server.use(body_parser_1.urlencoded({ extended: true }));
    server.use("/api/users", users_routes_1.default);
    server.use("/api/admin", admin_routes_1.default);
    server.use("/api/auth", auth_routes_1.default);
    // unsupported routes handling.
    server.use((req, res, next) => {
        throw new http_error_1.HttpError("Unsupported routes", 404);
    });
    server.use(error_middleware_1.default);
}
exports.routes = routes;

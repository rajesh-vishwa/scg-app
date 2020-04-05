"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import winston from "winston";
function error(err, req, res, next) {
    // winston.error(err);
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.code || 500);
    res.json({ message: err.message || "Something went wrong" });
}
exports.default = error;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_1 = require("./../models/http-error");
exports.getUsers = async (req, res, next) => {
    console.log("getUsers");
    res.json({ id: 1, name: "rajesh" });
};
exports.getUserById = async (req, res, next) => {
    const userId = req.params.userId;
    console.log("getUserById");
    return next(new http_error_1.HttpError("Could not find user by given Id.", 404));
    res.json({ id: 1, name: "rajesh" });
};

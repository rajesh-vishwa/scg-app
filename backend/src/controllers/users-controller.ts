import { RequestHandler } from "express";
import { HttpError } from "./../models/http-error";

export const getUsers: RequestHandler = async (req, res, next) => {
  console.log("getUsers");
  res.json({ id: 1, name: "rajesh" });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  console.log("getUserById");

  return next(new HttpError("Could not find user by given Id.", 404));
  res.json({ id: 1, name: "rajesh" });
};

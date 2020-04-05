import { RequestHandler } from "express";
import { validateLogin } from "../utils/validate.util";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { ILogin } from "../request-models/user";

export const authenticateUser: RequestHandler = async (req, res, next) => {
  // validation
  const login = req.body as ILogin;
  const { error } = validateLogin(login);
  if (error) {
    res.status(400).json(error.details[0].message);
    return;
  }

  let user = await User.findOne({ mobile: login.mobile });
  if (!user) return res.status(400).send("Invalid mobile or password.");

  const validPassword = await bcrypt.compare(login.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid mobile or password.");

  const token = user.generateAuthToken();
  res.json(token);
};

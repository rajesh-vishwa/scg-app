import { RequestHandler, NextFunction, Response } from "express";
import { validateUserOnRegister } from "../utils/validate.util";
import { User } from "../models/user.model";
import _ from "lodash";
import bcrypt from "bcrypt";
import { IRegisterUser } from "../request-models/user";
import { Player } from "./../models/player.model";

export const registerUser: RequestHandler = async (req, res, next) => {
  // validation
  const registerUser = req.body as IRegisterUser;
  const { error } = validateUserOnRegister(registerUser);
  if (error) {
    res.status(400).json(error.details[0].message);
    return;
  }

  // validate mobile number of player
  let user = await User.findOne({ mobile: registerUser.mobile });
  if (user)
    return res.status(400).json("This mobile number already registerd.");

  user = new User(_.pick(registerUser, ["mobile", "password"]));
  // hashing password
  const salt = await bcrypt.genSalt(8);
  user.password = await bcrypt.hash(user.password, salt);

  // save user
  await user.save();

  // save plyer
  let player = new Player({
    firstName: registerUser.firstName,
    lastName: registerUser.lastName,
    nickName: registerUser.nickName,
    email: registerUser.email,
    userId: user._id
  });

  await player.save();

  res.json(player);
};

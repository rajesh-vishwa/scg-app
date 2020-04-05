import Joi from "joi";
import { IRegisterUser } from "../request-models/user";
import { ILogin } from "./../request-models/user";

export function validateUserOnRegister(user: IRegisterUser) {
  const schema = {
    firstName: Joi.string()
      .min(3)
      .max(100)
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(100)
      .required(),
    nickName: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(3)
      .max(255)
      .required()
      .email(),
    mobile: Joi.string()
      .min(10)
      .max(10)
      .required(),
    password: Joi.string()
      .min(3)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
}

export function validateLogin(login: ILogin) {
  const schema = {
    mobile: Joi.string()
      .min(10)
      .max(10)
      .required(),
    password: Joi.string()
      .min(3)
      .max(255)
      .required()
  };
  return Joi.validate(login, schema);
}

import { Request, Response, NextFunction } from "express";
import { HttpError } from "../models/http-error";
// import winston from "winston";

export default function error(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // winston.error(err);
  console.log(err);
  if(res.headersSent) {
      return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "Something went wrong"});
}

import { Express } from "express";
import { json, urlencoded } from "body-parser";
import usersRouter from "../routes/users-routes";
import error from "../middlewares/error-middleware";
import { HttpError } from "./../models/http-error";
import adminRouter from "./../routes/admin-routes";
import authRouter from "../routes/auth-routes";

export function routes(server: Express) {
  server.use(json());
  server.use(urlencoded({ extended: true }));
  server.use("/api/users", usersRouter);
  server.use("/api/admin", adminRouter);
  server.use("/api/auth", authRouter);
  // unsupported routes handling.
  server.use((req, res, next) => {
    throw new HttpError("Unsupported routes", 404);
  });
  server.use(error);
}

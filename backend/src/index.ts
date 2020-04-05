import express, { Express } from "express";
import checkEnvVariables from "./startup/config-check";
import { connectDB } from "./startup/db";
import { routes } from "./startup/routes";
import cors from "cors";
const server: Express = express();

// check if all env variables declared.
server.use(cors());
checkEnvVariables();
connectDB();
routes(server);
// port and listen
const port = process.env.PORT || 4200;
server.listen(port, () => {
  console.log(`SCG Api running on ${port} at ${new Date().toLocaleString()}`);
});

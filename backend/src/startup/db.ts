// import winston from "winston";
import config from "config";
import mongoose from "mongoose";

export function connectDB() {
  mongoose.connect(config.get("dbConn")).then(() =>
    // winston.info(`connected to db at ${new Date().toLocaleString()}`)
    console.log(
      `connected to dbConn: ${config.get(
        "dbConn"
      )}  at ${new Date().toLocaleString()}`
    )
  );
}

import config from "config";

const checkEnvVariables = () => {
  // check jwtprivateKey
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }

  // check jwtprivateKey
  if (!config.get("dbConn")) {
    throw new Error("FATAL ERROR: mongoDB connection is not defined.");
  }
};

export default checkEnvVariables;

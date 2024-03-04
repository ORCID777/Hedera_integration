import { networkConfig } from "./networks";
import { AppConfig } from "./type";
import * as constants from "./constants.jsx";

export * from "./type";

export const appConfig = {
  networks: networkConfig,
  constants: constants,
};

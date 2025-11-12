/** @format */

import { RequestHandler } from "express";
import { logger } from "../libs/logger";

export const logHttpRequest: RequestHandler = (req, _res, next) => {
  logger.info(`${req.method} ${req.url} ${JSON.stringify(req.body, null, 2)}`);
  next();
};

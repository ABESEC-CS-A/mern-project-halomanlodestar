/** @format */

import express from "express";
import cookieParser from "cookie-parser";
import { logger } from "./libs/logger";
import { logHttpRequest } from "./middlerwares/logger.middleware";
import { env } from "./libs/env";

const app = express();
const port = env.PORT;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(logHttpRequest);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

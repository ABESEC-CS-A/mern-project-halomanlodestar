/** @format */

import winston, { createLogger, format } from "winston";

export const logger = createLogger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      handleRejections: true,
      format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.colorize(),
        format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        })
      ),
    }),
  ],
});

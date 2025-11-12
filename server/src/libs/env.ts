/** @format */

import z from "zod";
import dotenv from "dotenv";

dotenv.config({
  quiet: true,
});

export const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const parseEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error("❌ Invalid environment configuration:");
    if (error instanceof z.ZodError) {
      error.issues.forEach((issue) => {
        console.error(`- ${issue.path.join(".")}: ${issue.message}`);
      });
    }
    process.exit(1);
  }
};

export const env = parseEnv();

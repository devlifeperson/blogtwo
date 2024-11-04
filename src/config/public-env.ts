import { z } from "zod";

const IS_DEV = process.env.NODE_ENV !== "production";

const publicEnvSchema = z.object({
  SITE_URL: z.string().url(),
  DEPLOY_URL: z.string().url(),
  BASE_PATH: z.string()
});

const SITE_URL = IS_DEV
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_DEPLOY_URL;

export const publicEnv = publicEnvSchema.parse({
  SITE_URL: SITE_URL,
  DEPLOY_URL: process.env.NEXT_PUBLIC_DEPLOY_URL,
  BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH
});

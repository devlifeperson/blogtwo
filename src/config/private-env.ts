import { z } from "zod";

const privateEnvSchema = z.object({
  API_URL: z.string().url(),
  WEBSITE_ID: z.string(),
});

const result = privateEnvSchema.safeParse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  WEBSITE_ID: process.env.NEXT_PUBLIC_INDEX_WEBSITE_ID,
});

if (!result.success) {
  console.log("❌ Invalid environment variables:");
  result.error.issues.forEach((issue) => {
    console.log(`\t${issue.path.join(".")}: ${issue.message}`);
  });
  throw new Error("Invalid environment environment variables");
}

export const privateEnv = result.data;

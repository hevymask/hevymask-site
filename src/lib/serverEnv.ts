import { z } from 'zod'

const serverEnvSchema = z.object({
  TITLE: z.string(),
  DESCRIPTION: z.string(),
  
  URL: z.url(),
  NAME: z.string(),

  TIKTOK_ACCOUNT: z.string(),
  TWITTER_ACCOUNT: z.string(),
  GITHUB_ACCOUNT: z.string()
})

export const serverEnv = serverEnvSchema.parse(process.env)

import { z } from 'zod'

const envSchema = z.object({
  TITLE: z.string(),
  SUBTITLE: z.string(),
  DESCRIPTION: z.string(),
  
  URL: z.url(),
  NAME: z.string(),

  TIKTOK_ACCOUNT: z.string(),
  TWITTER_ACCOUNT: z.string(),
  GITHUB_ACCOUNT: z.string()
})

export const env = envSchema.parse(process.env)

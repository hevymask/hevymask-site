import { z } from "zod"

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUBTITLE: z.string()
})

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_SUBTITLE: process.env.NEXT_PUBLIC_SUBTITLE
})

import z from 'zod'

const projectConfigSchema = z.object({
  appName: z.string(),
  headline: z.string(),
  description: z.string(),
  url: z.url(),
  auther: z.string(),

  account: z.object({
    tiktok: z.string(),
    github: z.string(),
    twitter: z.string()
  }).optional()
})

type ProjectConfig = z.infer<typeof projectConfigSchema>

function setProjectConfig(config: ProjectConfig) {
  return projectConfigSchema.parse(config)
}

// You need to customize this options.
export const projectConfig = setProjectConfig({
  appName: 'hevymask.dev',
  headline: 'The anonymous digital artist',
  description: 'This is the portfolio site of heavymask, a Japanese high school student who works as artist.',
  url: 'https://hevymask.dev',
  auther: 'Hevy Mask',
  account: {
    tiktok: 'https://www.tiktok.com/@hevy.mask',
    github: 'https://github.com',
    twitter: 'https://x.com/hevymask'
  }
})

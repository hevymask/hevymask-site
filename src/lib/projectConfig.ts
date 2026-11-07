import z from 'zod'

const configSchema = z.object({
  appName: z.string(),
  headline: z.string(),
  description: z.string(),
  url: z.url(),
  auther: z.string(),

  account: z.array(z.object({
    name: z.enum(['TikTok', 'GitHub', 'Twitter']),
    url: z.url()
  }))
})

type Config = z.infer<typeof configSchema>

function setConfig(config: Config) {
  return configSchema.parse(config)
}

// Need to customize this options.
export const projectConfig = setConfig({
  appName: 'hevymask.dev',
  headline: 'The anonymous digital artist',
  description: 'This is the portfolio site of heavymask, a Japanese high school student who works as artist.',
  url: 'https://hevymask.dev',
  auther: 'Hevy Mask',

  account: [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@hevy.mask'
    },

    {
      name: 'GitHub',
      url: 'https://github.com'
    },

    {
      name: 'Twitter',
      url: 'https://x.com/hevymask'
    }
  ]
})

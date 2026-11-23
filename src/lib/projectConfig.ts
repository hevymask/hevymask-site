import z from 'zod'

const configSchema = z.object({
  appName: z.string(),
  description: z.string(),

  // Values ​​of 4 words or less
  headline: z.string().refine(
    (value) => {
      const words = value.split(' ')
      return words.length <= 4
    },

    {
      error: '4 words or fewer',
    }
  ),

  deployURL: z.url(),
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
  headline: 'An anonymous digital artist',
  description: 'This is the portfolio site of heavymask, an anonymous digital artist.',
  deployURL: 'https://hevymask.dev',
  auther: 'hevymask',

  account: [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@hevymask'
    },

    {
      name: 'GitHub',
      url: 'https://github.com/hevymask'
    },

    {
      name: 'Twitter',
      url: 'https://x.com/hevymask'
    }
  ]
})

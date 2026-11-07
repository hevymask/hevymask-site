// Icons
import { IconType } from 'react-icons'
import { VscVscode } from 'react-icons/vsc'
import { FaAws } from 'react-icons/fa6'

import {
  SiHtml5,
  SiJavascript,
  SiCss,
  SiGithub,
  SiPython,
  SiGoogleappsscript,
  SiNodedotjs,
  SiNpm,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiCloudflare,
  SiShadcnui,
  SiTauri,
  SiTanstack,
  SiObsstudio,
  SiBlender,
  SiNextdotjs,
  SiZod,

  SiHono,
  SiGodotengine,
  SiDavinciresolve,
  SiExpo,
  SiSupabase,
  SiCplusplus
} from 'react-icons/si'

type Skills = {
  name: string,
  icon: IconType
}[]

export const mySkills: Skills = [
  { name: 'VSCode', icon: VscVscode },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'CSS', icon: SiCss },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Python', icon: SiPython },
  { name: 'Google Apps Script', icon: SiGoogleappsscript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'npm', icon: SiNpm },
  { name: 'Express js', icon: SiExpress },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Cloudflare', icon: SiCloudflare },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Tanstack', icon: SiTanstack },
  { name: 'Blender', icon: SiBlender },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'OBS', icon: SiObsstudio },
  { name: 'Zod', icon: SiZod },
]

export const myGoalSkills: Skills = [
  { name: 'Hono', icon: SiHono },
  { name: 'React Native', icon: SiReact },
  { name: 'Godot', icon: SiGodotengine },
  { name: 'DaVinti Resolve', icon: SiDavinciresolve },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Expo', icon: SiExpo },
  { name: 'Cpp', icon: SiCplusplus },
  { name: 'AWS', icon: FaAws }
]

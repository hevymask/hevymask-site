// Icons
import { IconType } from 'react-icons'
import { VscVscode } from 'react-icons/vsc'
import { IoIosMusicalNote } from 'react-icons/io'

import {
  FaCode,
  FaWifi,
  FaAws
} from 'react-icons/fa6'

import {
  SiBlender,
  SiTailwindcss,
  SiGodotengine,
  SiTauri,
  SiTypescript,
  SiFigma,
  SiCapacitor,
  SiCloudflare,
  SiSupabase,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiNpm,
  SiGimp,
  SiHtml5,
  SiJavascript,
  SiCss,
  SiVite,
  SiShadcnui,
  SiTanstack,
  SiNextdotjs,
  SiObsstudio,
  SiZod,
  SiDavinciresolve,
  SiExpress,
  SiHono,
  SiGoogleappsscript,
  SiPython,
  SiFirebase
} from 'react-icons/si'

type Skills = {
  name: string,
  icon: IconType,
  searchName?: string
}[]

export const mySkills: Skills = [
  { name: 'VSCode', icon: VscVscode },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'CSS', icon: SiCss },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Google Apps Script', icon: SiGoogleappsscript },
  { name: 'Python', icon: SiPython },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress, searchName: 'Express framework' },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'npm', icon: SiNpm },
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'Cloudflare', icon: SiCloudflare },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Tanstack', icon: SiTanstack },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Blender', icon: SiBlender },
  { name: 'Godot', icon: SiGodotengine },
  { name: 'OBS', icon: SiObsstudio },
  { name: 'Zod', icon: SiZod },
  { name: 'Hono', icon: SiHono },
  { name: 'Capacitor', icon: SiCapacitor, searchName: 'Capacitor framework' }
]

export const MyGoalSkills: Skills = [
  { name: 'Gimp', icon: SiGimp },
  { name: 'DaVinti Resolve', icon: SiDavinciresolve },
  { name: 'Figma', icon: SiFigma },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'GDScript', icon: SiGodotengine },
  { name: 'ESP32', icon: FaWifi },
  { name: 'C++', icon: FaCode, searchName: 'Cpp language' },
  { name: 'AWS', icon: FaAws },
  { name: 'FL Studio', icon: IoIosMusicalNote }
]

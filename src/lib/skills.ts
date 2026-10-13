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
  SiDavinciresolve
} from 'react-icons/si'

type Skills = {
  name: string,
  icon: IconType,
  searchName?: string
}[]

const skills: Skills = [
  { name: 'VSCode', icon: VscVscode },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'CSS', icon: SiCss },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Cloudflare', icon: SiCloudflare },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'npm', icon: SiNpm },
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Tanstack', icon: SiTanstack },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Blender', icon: SiBlender },
  { name: 'Godot', icon: SiGodotengine },
  { name: 'OBS', icon: SiObsstudio },
  { name: 'Zod', icon: SiZod }
]

const goalSkills: Skills = [
  { name: 'GIMP', icon: SiGimp },
  { name: 'DaVinti Resolve', icon: SiDavinciresolve },
  { name: 'Figma', icon: SiFigma },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Capacitor', icon: SiCapacitor },

  { name: 'GDScript', icon: SiGodotengine },
  { name: 'ESP32', icon: FaWifi },
  { name: 'C++', icon: FaCode, searchName: 'cpp language' },
  { name: 'AWS', icon: FaAws },
  { name: 'FL Studio', icon: IoIosMusicalNote }
]

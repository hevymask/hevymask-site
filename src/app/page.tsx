import type { Metadata } from 'next'
import { env } from '@/lib/env'
import { ScrambleTextAnimation } from '@/components/animation/scrambleText'

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

export const metadata: Metadata = (() => {
  return {
    title: `${env.SUBTITLE} - ${env.TITLE}`
  }
})()

export default function Page() {
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

  return (
    <div className='min-h-svh'>
      <main className='my-[7.5%] mx-[10%] border h-[200svh]'>
        <div className='py-12.5 px-10'>
          <ScrambleTextAnimation duration={500} className='text-3xl'>{env.NAME}</ScrambleTextAnimation>
          <ScrambleTextAnimation duration={500} className='text-2xl'>{env.SUBTITLE}</ScrambleTextAnimation>
        </div>

        <div className='pb-12.5 px-10 flex flex-col gap-3'>
          <ScrambleTextAnimation duration={500} className='text-3xl'>My Skills</ScrambleTextAnimation>
          
          <div className='flex items-center gap-3 flex-wrap'>
            {skills.map((skill) => {
              const searchName = skill.searchName ?? skill.name

              return (
                <a href={`https://www.google.com/search?q=What's ${searchName}?`} rel='noreferrer noopener' target='_blank' key={skill.name} className='border border-foreground p-3 w-fit flex items-center gap-1.5'>
                  <skill.icon className='size-5' />
                  <span className='text-sm'>{skill.name}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className='pb-12.5 px-10 flex flex-col gap-3'>
          <ScrambleTextAnimation duration={500} className='text-3xl'>Goal Skills</ScrambleTextAnimation>
          
          <div className='flex items-center gap-3 flex-wrap'>
            {goalSkills.map((skill) => {
              const searchName = skill.searchName ?? skill.name

              return (
                <a href={`https://www.google.com/search?q=What's ${searchName}?`} rel='noreferrer noopener' target='_blank' key={skill.name} className='cursor-pointer border border-foreground p-3 w-fit flex items-center gap-1.5'>
                  <skill.icon className='size-5' />
                  <span className='text-sm'>{skill.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

// This code is created by ChatGPT

'use client'

import { useEffect, useState } from "react"

export function ScrambleTextAnimation({
  children,
  duration = 1000,
  ...props
}: {
  children: string
  duration?: number
} & React.ComponentProps<'p'>) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let frameId: number
    let startTime: number | null = null

    const animate = (time: number) => {
      if (startTime === null) startTime = time

      const progress = Math.min((time - startTime) / duration, 1)
      const resolvedCount = Math.floor(progress * children.length)

      const result = [...children].map((char, index) => {
        if (char === " ") return " "
        if (index < resolvedCount) return char

        return characters[
          Math.floor(Math.random() * characters.length)
        ]
      })

      setDisplayText(result.join(""))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setDisplayText(children)
      }
    }

    setDisplayText(
      [...children]
        .map((char) =>
          char === " "
            ? " "
            : characters[Math.floor(Math.random() * characters.length)]
        )
        .join("")
    )

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [children, duration, characters])

  return <p {...props}>{displayText}</p>
}

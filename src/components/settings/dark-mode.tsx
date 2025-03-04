"use client"

import { useThemeMode } from "@/hooks/settings/use-settings"
import React from "react"
import { Section } from "../section-label"
import { cn } from "@/lib/utils"
import { SystemMode } from "../themes-placeholder/systemmode"
import { LightMode } from "../themes-placeholder/lightmode"
import { DarkMode } from "../themes-placeholder/darkmode"

type Props = {}

const DarkModetoggle = (props: Props) => {
    const { setTheme, theme } = useThemeMode()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section 
          label="Interface Theme"
          message="Select or customize your UI theme"
        />
      </div>
      <div className="lg:cols-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div onClick={() => setTheme('system')} className={cn("rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent", theme == "system" && "border-orange")}>
          <SystemMode />
        </div>
      </div>
      <div className="lg:cols-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div onClick={() => setTheme('dark')} className={cn("rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent", theme == "dark" && "border-transparent")}>
          <DarkMode />
        </div>
      </div>
      <div className="lg:cols-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div onClick={() => setTheme('light')} className={cn("rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent", theme == "light" && "border-transparent")}>
          <LightMode />
        </div>
      </div>
      
    </div>
  )
}

export default DarkModetoggle
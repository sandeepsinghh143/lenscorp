"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import ThemeIcons from './ThemeIcons';


const ThemeSwitcher = () => {
    const {theme,setTheme} = useTheme();
    const handleThemeChange = () => {
      setTheme(theme==="dark"?"light":"dark");
    }
  return (
    <div className='flex justify-between items-center'>
        <ThemeIcons theme={theme} handleThemeChange={handleThemeChange}/>
    </div>
  )
}
export default ThemeSwitcher

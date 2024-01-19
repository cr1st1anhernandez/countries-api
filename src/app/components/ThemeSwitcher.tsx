"use client"
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'

import { MdLightMode } from 'react-icons/md'

export default function ThemeSwitcher(): JSX.Element {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode)
      }}
    >
      {darkMode ? (
        <FaMoon className="text-white" size={18} />
      ) : (
        <MdLightMode className="text-black" size={18} />
      )}
    </button>
  )
}

'use client'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
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
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Theme</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          onClick={() => {
            setDarkMode(true)
          }}
          key="dark"
          endContent={
            <FaMoon className="text-zinc-900 dark:text-zinc-200" size={18} />
          }
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="light"
          onClick={() => {
            setDarkMode(false)
          }}
          endContent={
            <MdLightMode
              className="text-zinc-900 dark:text-zinc-200"
              size={18}
            />
          }
        >
          Light
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

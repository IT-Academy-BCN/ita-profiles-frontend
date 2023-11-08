import { ReactNode, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeContextT } from './ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('light')

  const themeValue: ThemeContextT = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}

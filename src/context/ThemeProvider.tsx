import { ReactNode, useState } from 'react'
import { ThemeContext, ThemeContextType } from './ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('light')

  const themeValue: ThemeContextType = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}

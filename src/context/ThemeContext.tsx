import { createContext } from 'react'

export type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // Provide a default theme value
  setTheme: () => {}, // Provide a default setTheme function
})


import React from 'react'

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light', // Provide a default theme value
  setTheme: () => {}, // Provide a default setTheme function
})

export type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

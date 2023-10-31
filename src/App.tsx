import './App.css'
import { ThemeProvider } from './context/ThemeProvider'
import SwitchTheme from './SwitchTheme'

function App() {
  return (
    <>
      <ThemeProvider>
        <SwitchTheme />
      </ThemeProvider>
    </>
  )
}

export default App

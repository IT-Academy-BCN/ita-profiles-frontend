import './App.css'
import SwitchTheme from './components/SwitchTheme'
import { ThemeProvider } from './context/ThemeProvider'

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

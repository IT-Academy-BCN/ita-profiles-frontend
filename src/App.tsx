import SwitchTheme from './components/SwitchTheme'
import { ThemeProvider } from './context/ThemeProvider'
import './styles/App.css'

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

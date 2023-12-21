import { ThemeProvider } from './context/ThemeProvider';
import Home from './pages/Home';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;

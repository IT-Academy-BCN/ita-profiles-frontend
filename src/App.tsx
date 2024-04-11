import SmallScreenProvider from './context/SmallScreenContext';
import { SelectedStudentProvider } from './context/StudentProjectsContext';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  return (
    <SelectedStudentProvider>
      <SmallScreenProvider>
        <Home />
      </SmallScreenProvider>
    </SelectedStudentProvider>
  );
};

export default App;

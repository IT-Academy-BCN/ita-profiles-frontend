import SmallScreenProvider from './context/smallScreenContext';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  return (
    <SmallScreenProvider>
      <Home />
    </SmallScreenProvider>
  );
};

export default App;

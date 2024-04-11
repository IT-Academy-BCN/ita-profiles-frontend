import SmallScreenProvider from './context/SmallScreenContext';
import Home from './pages/Home';
import './styles/App.css';
import { StateContext } from './context/StateContext.tsx'
import { useState } from 'react';

const App = () => {
  const [appState, setAppState] = useState(
    {
      message: '',
      disabled: false,
    }
  )

  return (
    <StateContext.Provider value={{ appState: appState, setAppState: setAppState }}>
      <SmallScreenProvider>
        <Home />
      </SmallScreenProvider>
    </StateContext.Provider>
  );
};

export default App;

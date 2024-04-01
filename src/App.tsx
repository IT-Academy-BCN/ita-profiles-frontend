import { Provider } from 'react-redux';
import store from '../src/redux/store';
import type { Store } from 'redux'; 
import SmallScreenProvider from './context/SmallScreenContext';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store as Store}> // Specify the type for the store
      <SmallScreenProvider>
        <Home />
      </SmallScreenProvider>
    </Provider> 
  );
};

export default App;

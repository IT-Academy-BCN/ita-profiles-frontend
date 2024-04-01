import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import SmallScreenProvider from './context/SmallScreenContext';
import Home from './pages/Home';
import StudentsList from './components/StudentList';
import './styles/App.css';

const store = configureStore({ reducer: rootReducer });

const App = () => {
  return (
    <Provider store={store}> 
      <SmallScreenProvider>
        <Home />
        <StudentsList />
      </SmallScreenProvider>
    </Provider> 
  );
};

export default App;
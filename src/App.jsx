import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AppThemeProvider } from './components/commonComponents/ThemeComponent';

const App = () => {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;

import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AppThemeProvider } from './components/commonComponents/ThemeComponent';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </AppThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {

  return (

    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

export default App;

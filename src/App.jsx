import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routers/Router';
import Dashboard from './pages/Dashboard';
import AllIconsDisplay from './pages/AllSvgs';

const App = () => {

  return (

    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

export default App;

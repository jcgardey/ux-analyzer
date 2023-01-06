import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import './Components/Form.css';
import './Pages/Layout.css';

import './Pages/Pasajero.css';
import { Pages } from './Pages/Pages';

export const App = ({}) => {
  return (
    <div className="container">
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  );
};


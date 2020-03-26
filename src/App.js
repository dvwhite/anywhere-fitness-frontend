import React from 'react';
import './App.scss';

// Client side routing
import { BrowserRouter as Router } from 'react-router-dom';

// Component imports
import Header from './components/Header';
import MasterRouter from './components/MasterRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MasterRouter />
      </div>
    </Router>
  );
}

export default App;

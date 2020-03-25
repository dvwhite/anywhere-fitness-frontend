import React from 'react';
import './App.scss';

// Client side routing
import { BrowserRouter as Router } from 'react-router-dom';

// Component imports
import MasterRouter from './components/MasterRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Anywhere Fitness</h1>
        <MasterRouter />
      </div>
    </Router>
  );
}

export default App;

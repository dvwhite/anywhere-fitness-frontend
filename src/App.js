import React from 'react';
import './App.scss';

// Components
import MasterRouter from "./components/MasterRouter";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <MasterRouter />
      </div>
    )
  }
}


export default App;

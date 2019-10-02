import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Intro  />
        <Navigation />
     

      </header>
    </div>
  );
}

export default App;

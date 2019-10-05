import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
      </header>
      <body className='App-body'>
        <Home />
        <About />
        <Experience />
        <Contact />
      </body>
    </div>
  );
}

export default App;

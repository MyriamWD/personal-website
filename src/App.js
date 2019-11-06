import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
      <footer className='App-footer'>
        <small>&copy; Developed by Myriam</small>
      </footer>
    </div>
  );
}

export default App;

        
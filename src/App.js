import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ReactComponent as GithubLogo } from './images/github-logo.svg';
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
        <small>&copy; 2020 Myriam Walden-Duarte</small>
        <a href={"https://github.com/MyriamWD/personal-website"} target="_blank">
          <GithubLogo className="App-footer-github"/>
        </a>
      </footer>
    </div>
  );
}

export default App;

        
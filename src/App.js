import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ReactComponent as GithubLogo } from './images/github-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hamburgerMenuOn: false,
    }
  }

  activateHamburgerMenu = () => {
    this.setState({
        hamburgerMenuOn: !this.state.hamburgerMenuOn,
    })
  }

  turnOffHamburgerMenu = () => {
    this.setState({
      hamburgerMenuOn: false,
    })
  }
  
  render () {
    return (
    <div className='App'>
      <header className='App-header'>
        <Navigation 
          hamburgerMenuOn={this.state.hamburgerMenuOn} 
          activateHamburgerMenu={this.activateHamburgerMenu} 
          turnOffHamburgerMenu={this.turnOffHamburgerMenu}
        />      
      </header>
      <div className='App-body'>
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
      <footer className='App-footer'>
        <small>&copy; 2020 Myriam Walden-Duarte</small>
        <a href={"https://github.com/MyriamWD/personal-website"} target="_blank">
          <GithubLogo className="App-footer-github"/>
        </a>
      </footer>
    </div>
    )
  }
}

        
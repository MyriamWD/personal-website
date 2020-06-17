import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Link, animateScroll as scroll } from "react-scroll";
import HomeLogo from '../images/home-logo.png';
import ResumePDF from '../documents/MyriamWalden-Duarte-Resume.pdf';
import './Navigation.css';

export default class Navigation extends Component {
    
    constructor(props) {
        super(props)   
    }
    
    render() {
        return (
            <nav className={this.props.hamburgerMenuOn? "hamburger-navigation-bar" : "navigation-bar"}>
                <Link
                    activeClass="active"
                    className={this.props.hamburgerMenuOn? "home-hidden" : "home"}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        <Image id="home-logo"src={HomeLogo} height="80"/>
                    </Link>

                <button className={this.props.hamburgerMenuOn? "hamburger-menu-open" : "hamburger-menu-closed"} onClick={this.props.activateHamburgerMenu}>
                    <div className="menu-burger"/>
                </button>

                <ul className={this.props.hamburgerMenuOn? "hamburger-nav-links" : "nav-links"}>
                    <li>
                        <Link
                        id="hamburger-home"
                        className="nav-link"
                        activeClass="active"
                        onClick={this.props.turnOffHamburgerMenu}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                        className="nav-link"
                        activeClass="active"
                        onClick={this.props.turnOffHamburgerMenu}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            <p id="about-label">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                        className="nav-link"
                        activeClass="active"
                        onClick={this.props.turnOffHamburgerMenu}
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            <p id="experience-label">Projects</p>
                        </Link> 
                    </li>
                    <li>
                        <a className="nav-link" 
                            href={ResumePDF} target="_blank" 
                            onClick={this.props.turnOffHamburgerMenu}>
                            <p id="resume-label">Resume</p>
                        </a> 
                    </li> 
                    <li>
                        <Link
                        className="nav-link"
                        activeClass="active"
                        onClick={this.props.turnOffHamburgerMenu}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            <p id="contact-label">Contact</p>
                        </Link> 
                    </li>    
                </ul>
            </nav>     
        )
    }
}
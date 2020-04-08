import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navigation.css';

function Navigation () {
    return (
        <nav className="navigation-bar">
            <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>
                    Home
                </Link>

            <ul className='nav-links'>
                <li>
                    <Link
                    className="nav-link"
                    activeClass="active"
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
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        <p id="experience-label">Experience</p>
                    </Link> 
                </li>
                <li>
                    <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        <p id="contact-label">Contact</p>
                    </Link> 
                </li>    
                <li>
                    <Link
                    className="nav-link"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        <p id="resume-label">Resume</p>
                    </Link>
                </li> 
            </ul>
        </nav>     
    )
}

export default Navigation;

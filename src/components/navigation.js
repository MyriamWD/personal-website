import React from 'react';
import Image from 'react-bootstrap/Image'
import { Link, animateScroll as scroll } from "react-scroll";
import HomeLogo from '../images/home-logo.png';
import ResumePDF from '../documents/mwd-resume-2020.pdf';
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
                    <Image src={HomeLogo} height="80"/>
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
                    <a className="nav-link" href={ResumePDF} target="_blank">
                        <p id="resume-label">Resume</p>
                    </a> 
                </li> 
            </ul>
        </nav>     
    )
}

export default Navigation;

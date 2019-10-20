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
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        Experience
                    </Link> 
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        Contact
                    </Link> 
                </li>    
                <li>
                    <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        Resume
                    </Link>
                </li> 
            </ul>
        </nav>     
    )
}

export default Navigation;

import React from 'react';
import './Navigation.css';

function Navigation () {
    return (
        <nav className='navbar'>
            <a className='home'>Home</a>

            <ul className='nav-links'>
                <li>About</li>
                <li>Experience</li>
                <li>Contact</li>    
                <li>Resume</li> 
            </ul>
        </nav>
    )
}

export default Navigation;


//Todo: Resume will be it's own component with fun ang games - link to download a pdf with my resume

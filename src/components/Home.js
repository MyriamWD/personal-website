import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.css';

function Home(){
    return (
        <div className='home-section' id='home'>
            <p className="content-home">Hi, I am Myriam</p>
            <p className="content-subtitle">I'm a software engineer based in Seattle, WA. </p>
            <Link
                    activeClass="active"
                    className="learn"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>
                        Learn more ...
                    </Link> 
            
        </div>
    )
}

export default Home ;
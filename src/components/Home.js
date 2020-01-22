import React from 'react';
import './Home.css';

function Home(){
    return (
        <div className='home-section' id='home'>
            <p className="content-home">Hi, I am Myriam</p>
            <p className="content-subtitle">I'm a software engineer based in Seattle, WA. </p>
            <a className="learn" href="about" >Learn more ...</a>
        </div>
    )
}

export default Home ;
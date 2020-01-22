import React from 'react';
import { Parallax, Background } from "react-parallax";
import './About.css';

function About() {
    return (
        <div className='about-section' id='about'>
            
            
            <Parallax strength={400}
                bgImage={require("../images/onePhoto.jpg")}
                >
                    <div className="content-about">
                        <p >Let's connect!</p>
                        <p className="about-info" >Let's connect!</p>

                    </div>
                    
                
                
            </Parallax>
        </div>
    )
}

export default About ;

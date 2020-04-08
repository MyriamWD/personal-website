import React from 'react';
import { Parallax, Background } from "react-parallax";
import './About.css';

function About() {
    return (
        <div className='about-section' id='about'>
              
            <Parallax strength={330}
                bgImage={require("../images/myriam_wd_r.jpg")}
                >
                    <div className="content-about">
                        <p className="about-info" >Comming soon!</p>
                    </div>
            </Parallax>
        </div>
    )
}

export default About ;

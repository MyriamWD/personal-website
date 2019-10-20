import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tipsyTime from '../images/TipsyTime.png'
import './Experience.css';

function Experience() {
    return (
        <div className='experience-section' id='experience'>
            <Carousel className="projects-carousel" keyboard={true}>
                <Carousel.Item className="first-project">    
                    <img className="tipsy"
                        src={tipsyTime}
                    />
                    <Carousel.Caption className="divider">
                    <img
                        src="https://assets.rbl.ms/10582635/origin.jpg"
                    />
                        <h3>Hello, again!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://assets.rbl.ms/10582635/origin.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Hello, again!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://assets.rbl.ms/10582635/origin.jpg"
                    />
                    <Carousel.Caption>
                        <h3>and again!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                See more
            </div>
            
        </div>
    )
}

export default Experience;
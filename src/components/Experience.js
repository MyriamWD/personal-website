import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import githublogo from '../images/github-logo.svg';
import devpostlogo from '../images/devpost.png';
import tipsyTime from '../images/TipsyTime.png';
import misgender from '../images/misgender.jpg';

import './Experience.css';

function Experience() {
    return (
        <div className='experience-section' id='experience'>
            <Carousel className="projects-carousel" keyboard={true}>
                <Carousel.Item className="first-project">    
                    <a href="https://tipsytime.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="crop">
                        <img className="project-image" src={tipsyTime}/>
                    </a>
                    <Carousel.Caption className="divider">
                        <a href="https://tipsytime.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-name">
                            <h3>Tipsy Time</h3>
                        </a>
                        <section className="project-description">
                            <p>E-commerce platform for liquor store with user authentication, shopping cart, merchandise listing and merchants dashboard.</p>
                            <p>Developed by a team of 4 devs on 2 weeks</p>
                            <p>Ruby on rails  OAuth MVC Unit Testing</p>
                        </section>
                        <a href="https://github.com/MyriamWD/betsy" target="_blank" rel="noopener noreferrer">
                            <img className="github" src={githublogo}/>
                        </a>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://misgender-me.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="crop">
                        <img className="project-image" src={misgender}/>
                    </a>
                    <Carousel.Caption className="divider">
                        <a href="https://misgender-me.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-name">
                            <h3>Misgender.me</h3>
                        </a>
                        <section className="project-description">
                            <p>Social experiment platform to expose and identify gender assignment bias in algorithms. Created during <a href="https://boston.techtogether.io/" target="_blank" rel="noopener noreferrer" className="place">Tech Together Boston Hackaton</a>.</p>
                            <p>Developed by a team of 5 devs on a night!</p>
                            <p>Ruby on rails  HTML  CSS </p>
                        </section>
                        <a href="https://github.com/MyriamWD/misgender.me" target="_blank" rel="noopener noreferrer">
                            <img className="github" src={githublogo}/>
                        </a>
                        <a href="https://devpost.com/software/misgender-me" target="_blank" rel="noopener noreferrer">
                            <img className="devpost" src={devpostlogo}/>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://assets.rbl.ms/10582635/origin.jpg" target="_blank" rel="noopener noreferrer" className="crop">
                        <img className="project-image" src="https://assets.rbl.ms/10582635/origin.jpg"/>
                    </a>
                    <Carousel.Caption className="divider">
                        <a href="https://assets.rbl.ms/10582635/origin.jpg" target="_blank" rel="noopener noreferrer" className="project-name">
                            <h3>Puppies</h3>
                        </a>
                        <section className="project-description">
                            <p>Soul fulfilling placeholder. Aren’t they cute? :) </p>
                        </section>
                        <a href="https://github.com/MyriamWD/" target="_blank" rel="noopener noreferrer">
                            <img className="github" src={githublogo}/>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Experience;
import React, { Component } from 'react';
import { ReactComponent as GithubLogo } from '../images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../images/linkedin-logo.svg';
import { ReactComponent as MailLogo } from '../images/mail-logo.svg';
import './Contact.css'

export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            emailCopied: false,
            hint: 'Copy email to clipboard',
        }
    }
    
    copyCodeToClipboard = () => {
        navigator.clipboard.writeText("myriam.waldend@gmail.com")
        this.setState({
            emailCopied: true,
            hint: 'Email copied, yay!'
        })

        setTimeout(() => {
            this.setState({
                emailCopied: false,
                hint: 'Copy email to clipboard',
            });
        }, 2000);
    }
    
    render () {
        return (
            <section className='contact-section' id='contact'>
                <section className="contact-info">
                
                    <p className="contact-title">Let's connect!</p>
                    <p className="contact-description">
                    New projects are always exciting, especially if they involve full-stack development.
                    </p>
                    <p className="contact-description">
                    New projects are always exciting, especially if they involve full-stack development.
                    </p>
                    <p className="contact-description">
                        especially if they involve full-stack development.
                    </p>
                    
                    <div>
                        <a href="https://github.com/MyriamWD" target="_blank" rel="noopener noreferrer">
                            <GithubLogo className="contact-logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/myriam-walden-duarte/" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo className="contact-logo"/>
                        </a>
                        <a href="mailto:myriam.waldenduarte@gmail.com?subject=Hi Myriam, my name is [NAME] from [COMPANY or ANY PLACE IN THE UNIVERSE]" target="_blank" rel="noopener noreferrer">
                            <MailLogo className="contact-logo"/>
                            
                        </a>
                    </div>
                    <button className={this.state.emailCopied? "contact-copied" : "contact-button"} onClick={this.copyCodeToClipboard} >
                        <span className="copy-hint">{this.state.hint}</span>
                         myriam.waldenduarte@gmail.com
                    </button>
                </section>
            </section>
        ) 
    }
}
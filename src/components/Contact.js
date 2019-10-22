import React, { Component } from 'react';
import './Contact.css'




export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            emailCopied: false,
        }
    }
    
    copyCodeToClipboard = () => {
        navigator.clipboard.writeText("myriam.waldend@gmail.com")
        this.setState({
            emailCopied: true,
        })
      }

      outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }
    
    render () {
        return (
            <section className='contact-section' id='contact'>
                <section className="contact-info">
                    <p className="contact-title">Let's connect!</p>
                    <p className="contact-description">New projects are always exciting, especially if they involve full-stack development.</p>
                        <button className={this.state.emailCopied? "contact-copied" : "contact-button"} onClick={this.copyCodeToClipboard} >
                            <span className="copy-hint">Copy email to clipboard</span>
                            Say Hello
                        </button>
                </section>
            </section>
        ) 
    }
}
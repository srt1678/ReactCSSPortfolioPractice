import React from 'react'
import './contact.css';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>qwer@gmail.com</h5>
                    <a href='https://google.com' target='_blank'>Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsMessenger className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>qwer</h5>
                    <a href='https://google.com' target='_blank'>Send a message</a>
                </article>
                <article className='contact__option'>
                    <SiWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+1234567890</h5>
                    <a href='https://google.com' target='_blank'>Send a message</a>
                </article>
            </div>
            <form action=''>
                <input type='text' name='name' placeholder='Your Full Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
                <textarea name='message' rows='7' placeholder='Your Message' required />
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
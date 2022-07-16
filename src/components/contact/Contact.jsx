import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjebxzi', 'template_ebv3lyv', form.current, 'ZUaXZGoVD-B_YiZH1')
   
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>sharyaralimujeeb1@gmail.com</h5>
            <a href="mailto: sharyaralimujeeb1@gmail.com" target="_blank"> Send a message </a>
          </article>

          <article className="contact_option">
            <SiLinkedin className="contact_option-icon"/>
            <h4>Linked-In</h4>
            <h5>Sharyar Ali</h5>
            <a href="https://www.linkedin.com/in/sharyar-ali-41b5b2157" target="_blank"> Get Linked </a>
          </article>

          <article className="contact_option">
            <ImWhatsapp className="contact_option-icon"/>
            <h4>Whats-App</h4>
            <h5>03126358044</h5>
            <a href="https://api.whatsapp.com/send?phone=03126358044" target="_blank"> Whatsapp Me </a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" placeholder="Your Message" rows="8" required></textarea>
            <button type="submit" className="btn btn-primary"> Send Message </button>

        </form>

      </div>

    </section>
  )
}

export default Contact

import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="footer">
      <a href="#"  className="footer__logo">Shaharyar Ali Mujeeb</a>

      <ul className="footer__links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.facebook.com/sharyar.ali.33886" target="_blank" rel="noreferrer"> <FaFacebookF/> </a>
          <a href="https://www.instagram.com/sharyar._.ali/" target="_blank" rel="noreferrer"> <RiInstagramFill/> </a>
          <a href="https://twitter.com/ShaharyarMujeeb" target="_blank" rel="noreferrer"> <BsTwitter/> </a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Shaharyar Ali Mujeeb. All rights reversed.</small>
      </div>

    </footer>
  )
}

export default Footer

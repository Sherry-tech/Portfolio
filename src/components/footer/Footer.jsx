import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#"  className="footer_logo">SharYar ALi</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
          <a href="https://www.facebook.com/sharyar.ali.33886" target="_blank"> <FaFacebookF/> </a>
          <a href="https://www.instagram.com/sharyar._.ali/" target="_blank"> <RiInstagramFill/> </a>
          <a href="https://twitter.com/ShaharyarMujeeb" target="_blank"> <BsTwitter/> </a>
      </div>


      <div className="footer_copyright">
        <small>&copy; Sharyar Ali Mujeeb. All rights reversed.</small>
      </div>

    </footer>
  )
}

export default Footer
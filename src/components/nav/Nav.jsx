import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav className="nav">
      <a href="#head" onClick={()=>setActiveNav('#head')} className={`nav__link ${activeNav === "#head" ? 'active' : ''}`}>
        <AiOutlineHome />
        <span>Home</span>
      </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={`nav__link ${activeNav === "#about" ? 'active' : ''}`}>
        <AiOutlineUser />
        <span>About</span>
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={`nav__link ${activeNav === "#experience" ? 'active' : ''}`}>
        <BiBook />
        <span>Skills</span>
      </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={`nav__link ${activeNav === "#services" ? 'active' : ''}`}>
        <RiServiceLine />
        <span>Services</span>
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={`nav__link ${activeNav === "#contact" ? 'active': ''}`}>
        <BiMessageSquareDetail />
        <span>Contact</span>
      </a>
    </nav>
  )
}

export default Nav

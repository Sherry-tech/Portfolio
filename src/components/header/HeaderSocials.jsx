import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sharyar-ali-41b5b2157/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/Sherry-tech" target="_blank" rel="noreferrer"> <BsGithub /> </a>
        {/* <a href="https://dribbble.com" target="_blank" rel="noreferrer"> <AiOutlineDribbble /> </a> */}
    </div>
  )
}

export default HeaderSocials

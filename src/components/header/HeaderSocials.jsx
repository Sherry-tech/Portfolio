import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"> <BsLinkedin/> </a>
        <a href="https://github.com"> <BsGithub /> </a>
        <a href="https://dribble.com"> <AiOutlineDribbble /> </a>
    </div>
  )
}

export default HeaderSocials
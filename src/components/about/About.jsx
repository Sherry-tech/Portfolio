import React from 'react'
import './about.css'
import pic from '../../assets/pic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>



        <div className="about__me">
          <div className="about__me-image">
          <img src={pic} alt="About Pic" />
          </div> 
        </div>



        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>Fresh-Grad</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>10+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>8+ complete</small>
            </article>

          </div>

          <p>
            Hi there! Welcome to my Portfolio. I am a young Aspirant a Fresh Graduate and also like
            to find new places And an Adventurer. I prefer to do work with motivation and creative
            thinking that i get when writing code. Like to dicuss programs with people.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
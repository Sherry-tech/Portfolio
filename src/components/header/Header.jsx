import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () =>{
    return(
      <header id='head' className="hero">
          <div className="container hero__container">
              <div className="hero__copy glass glass--strong">
                  {/* <span className="pill">Creative web systems and glass UI</span> */}
                  <h1>Shaharyar Ali Mujeeb</h1>
                  <p className="hero__role">Senior Full Stack Developer</p>
                  <p className="hero__tagline text-light">
                    I design immersive, responsive web experiences that feel alive and polished.
                  </p>
                  <CTA />
                  <div className="hero__stats">
                    <div className="hero__stat glass">
                      <strong>10+</strong>
                      <span>Projects shipped</span>
                    </div>
                    <div className="hero__stat glass">
                      <strong>8+</strong>
                      <span>Happy clients</span>
                    </div>
                    <div className="hero__stat glass">
                      <strong>24/7</strong>
                      <span>Curiosity mode</span>
                    </div>
                  </div>
              </div>

              <div className="hero__visual">
                  <div className="hero__frame glass">
                      <img src={ME} alt="Sharyar portrait" />
                  </div>
                  {/* <div className="hero__badge glass">
                    Available for collaborations
                  </div> */}
                  <span className="hero__ring" />
              </div>

              <HeaderSocials />
              {/* <a href="#contact" className='scroll__down pill'>Scroll Down</a> */}
          </div>
      </header>
    )
}

export default Header

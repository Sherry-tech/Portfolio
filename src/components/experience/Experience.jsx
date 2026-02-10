import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">


                             {/* Front-End */}
          <div className="experience__panel glass">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Redux Store</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Next.js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>



                            {/* Back-End */}
          <div className="experience__panel glass">
          <h3>Backend Development</h3>
            
            <div className="experience__content">
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Express.js</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Nest.js</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>
              
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL, PostgreSQL</h4>
                  <small className='text-light'>Expert</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS, GCP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>
      


      </div>
    </section>
  )
}

export default Experience

import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
        <h2>Services</h2>
      <div className="container services__container">

          {/* Email-Marketing */}
        <article className='service glass'>
          <div className='service__head'>
            <h3>Email Marketing</h3>
            <span className="service__tag">Growth systems</span>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Have 5 months Experience in the Email Marketing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Using Klaviyo and MailChimp as a service Software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Maintaining a List of Organic and Ad-Campaing Users.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Writing Promotion and Sales Discount Emails and many more.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Running the Email Campaings for a Product or a Service.</p>
            </li>
          </ul>
        </article>


         {/* Web-Development */}
         <article className='service glass'>
          <div className='service__head'>
            <h3>Web Development</h3>
            <span className="service__tag">Full stack build</span>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>A Front-End React Developer aimed to make Fast and Responsive Web Applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>User Friendly with the most User Interactive Interface is preffered.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Doing the Backend with most Amazing Node JS framework and MongoDB NoSQL DataBase.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Working with the API's in Node JS to make Better Performances.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Building WordPress websites with the most amazing PlugIn's.</p>
            </li>
          </ul>
        </article>

        {/* Content-Creation */}
        <article className='service glass'>
          <div className='service__head'>
            <h3>Content-Creation</h3>
            <span className="service__tag">Brand presence</span>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Creating Content for Websites or Projects using Canva and other tools.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>SEO content writing to rank Websites and Products online.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Keyword Researches are the backbone of finding you online.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>For Social Media Content Creation GIPY is much Preffered.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon '/>
              <p>Tracking and alayzing content For the most Valuable leads.</p>
            </li>
          </ul>
        </article>
      
      </div>
    </section>
  )
}

export default Services

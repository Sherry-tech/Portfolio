import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio6.webp'
import IMG6 from '../../assets/portfolio5.png'



const data= [
  {
    id: 1,
    image: IMG1,
    title: "Static HTML & CSS Gamming Website",
    github: "https://github.com/Sherry-tech/Gammers.github.io",
    demo: "https://sherry-tech.github.io/Gammers.github.io/"
  },

  {
    id: 2,
    image: IMG2,
    title: "Cross-Fit Website clone",
    github: "https://github.com/Sherry-tech/CrossFit.github.io",
    demo: "https://sherry-tech.github.io/CrossFit.github.io/"
  },

  {
    id: 3,
    image: IMG3,
    title: "Travelling Website Front-end",
    github: "https://github.com/Sherry-tech/Travelers.github.io",
    demo: "https://sherry-tech.github.io/Travelers.github.io/"
  },

  {
    id: 4,
    image: IMG4,
    title: "JS DOM Drum-Kit",
    github: "https://github.com/Sherry-tech/DrumKit.github.io",
    demo: "https://sherry-tech.github.io/DrumKit.github.io/"
  },

  {
    id: 5,
    image: IMG5,
    title: "Weather API",
    github: "https://github.com/Sherry-tech/WeatherApi.github.io",
    demo: "https://sherry-tech.github.io/WeatherApi.github.io/"
  },

  {
    id: 6,
    image: IMG6,
    title: "Ecomm-Store using MERN Stack",
    github: "https://github.com/Sherry-tech/Ecomm-Store.github.io",
    demo: "https://sherry-tech.github.io/Ecomm-Store.github.io/"

  }


]



const Portfolio = () => {


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id, image, title, github, demo}) => {

            return(

              <article key={id} className="portfolio_item">
        
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
    
              <h3>{title}</h3>
            
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank"> GitHub </a>
                <a href={demo} className="btn btn-primary" target="_blank"> Live Demo </a>
              </div>
            
            </article>

            )

          })
        }

      </div>

    </section>
  )
}

export default Portfolio
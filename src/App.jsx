import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <div className="app">
        <div className="app__bg" aria-hidden="true">
          <span className="orb orb--a" />
          <span className="orb orb--b" />
          <span className="orb orb--c" />
          <span className="grid-sheen" />
        </div>
        <Header />
        {/* <Nav /> */}
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
   </div>
  )
}

export default App

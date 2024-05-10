import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Feature from '../components/feature'
import Intro from '../components/intro'
import Contact from '../components/contact'
import Footer1 from '../components/footer1'
import './home.css'

const HOME = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>FIITWELL1</title>
        <meta property="og:title" content="FIITWELL1" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar></Navbar>
      </div>
      <div className="home-features3">
        <Feature></Feature>
      </div>
      <div className="home-hero2">
        <Intro rootClassName="intro-root-class-name"></Intro>
      </div>
      <div className="home-contact">
        <Contact rootClassName="contact-root-class-name"></Contact>
      </div>
      <div className="home-footer5">
        <Footer1 rootClassName="footer1-root-class-name"></Footer1>
      </div>
    </div>
  )
}

export default HOME

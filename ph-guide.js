import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero3 from '../components/hero3'
import Features171 from '../components/features171'
import FAQ1 from '../components/faq1'
import Gallery1 from '../components/gallery1'
import Footer1 from '../components/footer1'
import './ph-guide.css'

const PHGUIDE = (props) => {
  return (
    <div className="phguide-container">
      <Helmet>
        <title>PH-GUIDE - FIITWELL1</title>
        <meta property="og:title" content="PH-GUIDE - FIITWELL1" />
      </Helmet>
      <div className="phguide-navbar1">
        <Navbar></Navbar>
      </div>
      <div className="phguide-hero2">
        <Hero3
          image1Src="https://t4.ftcdn.net/jpg/02/07/90/87/360_F_207908753_IgTqqhNJMOnWOgSNLXayj6MYaj91gdjp.jpg"
          rootClassName="hero3-root-class-name"
        ></Hero3>
      </div>
      <div className="phguide-logos3"></div>
      <Features171 rootClassName="features171-root-class-name"></Features171>
      <FAQ1 rootClassName="faq1-root-class-name1"></FAQ1>
      <div className="phguide-gallery4">
        <Gallery1
          image1Src="https://images.unsplash.com/photo-1519505645104-c7be90e0d630?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxjYXJkaW98ZW58MHx8fHwxNzE1MjY4NTU3fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
          rootClassName="gallery1-root-class-name"
        ></Gallery1>
      </div>
      <div className="phguide-features5"></div>
      <Footer1 rootClassName="footer1-root-class-name5"></Footer1>
      <div className="phguide-features6"></div>
      <div className="phguide-features7"></div>
      <span>Text</span>
      <div className="phguide-faq9"></div>
      <div className="phguide-contact10"></div>
      <div className="phguide-footer5"></div>
    </div>
  )
}

export default PHGUIDE

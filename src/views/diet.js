import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero91 from '../components/hero91'
import Features12 from '../components/features12'
import Footer1 from '../components/footer1'
import './diet.css'

const DIET = (props) => {
  return (
    <div className="diet-container">
      <Helmet>
        <title>DIET - FIITWELL1</title>
        <meta property="og:title" content="DIET - FIITWELL1" />
      </Helmet>
      <div className="diet-navbar1">
        <Navbar></Navbar>
      </div>
      <div className="diet-hero2">
        <Hero91></Hero91>
      </div>
      <div className="diet-features3">
        <Features12
          feature3Title="stay hydrated"
          rootClassName="features12-root-class-name"
          feature1ImageSrc="https://images.unsplash.com/photo-1583032353423-04fd96ef221c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0Nnx8bnV0cmllbnQlMjBkZW5zZSUyMGZvb2RzfGVufDB8fHx8MTcxNTMwNjQ3NXww&amp;ixlib=rb-4.0.3&amp;w=1400"
          feature2ImageSrc="https://images.unsplash.com/photo-1550951945-660a41587436?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxwcm9jZXNzJTIwZm9vZHN8ZW58MHx8fHwxNzE1MzA2NTQ4fDA&amp;ixlib=rb-4.0.3&amp;h=300"
          feature3ImageSrc="https://images.unsplash.com/photo-1532157277712-8771574c33b5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRlcnxlbnwwfHx8fDE3MTUzMDY3MTl8MA&amp;ixlib=rb-4.0.3&amp;h=300"
          feature3Description="Drink plenty of water throughout the day to stay hydrated. Limit your intake of sugary drinks, sodas, and excessive caffeine. Water is essential for digestion, nutrient absorption, and overall health."
        ></Features12>
      </div>
      <div className="diet-contact4"></div>
      <div className="diet-footer5">
        <Footer1 rootClassName="footer1-root-class-name4"></Footer1>
      </div>
    </div>
  )
}

export default DIET

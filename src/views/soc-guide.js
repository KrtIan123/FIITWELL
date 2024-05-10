import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Footer1 from '../components/footer1'
import './soc-guide.css'

const SOCGUIDE = (props) => {
  return (
    <div className="socguide-container">
      <Helmet>
        <title>SOC-GUIDE - FIITWELL1</title>
        <meta property="og:title" content="SOC-GUIDE - FIITWELL1" />
      </Helmet>
      <div className="socguide-navbar1">
        <Navbar></Navbar>
      </div>
      <div className="socguide-hero2">
        <Hero8
          image1Src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzb2NpYWwlMjB3ZWxsbmVzc3xlbnwwfHx8fDE3MTUyNzUxNzh8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
          rootClassName="hero8-root-class-name"
        ></Hero8>
      </div>
      <div className="socguide-stats3">
        <Stats2 rootClassName="stats2-root-class-name"></Stats2>
      </div>
      <div className="socguide-logos4"></div>
      <div className="socguide-features5"></div>
      <div className="socguide-team6"></div>
      <div className="socguide-footer5">
        <Footer1 rootClassName="footer1-root-class-name2"></Footer1>
      </div>
    </div>
  )
}

export default SOCGUIDE

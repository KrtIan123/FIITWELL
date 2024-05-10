import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import MHIntro from '../components/mh-intro'
import SHORTGUIDE from '../components/shortguide'
import Team14 from '../components/team14'
import Footer1 from '../components/footer1'
import './mh-guide.css'

const MHGUIDE = (props) => {
  return (
    <div className="mhguide-container">
      <Helmet>
        <title>MH-GUIDE - FIITWELL1</title>
        <meta property="og:title" content="MH-GUIDE - FIITWELL1" />
      </Helmet>
      <div className="mhguide-navbar1">
        <Navbar></Navbar>
      </div>
      <div className="mhguide-mhintro">
        <MHIntro image1Src="https://static-cse.canva.com/blob/983565/PhotographyAsTherapy14.jpg"></MHIntro>
      </div>
      <div className="mhguide-short-guides">
        <SHORTGUIDE></SHORTGUIDE>
      </div>
      <div className="mhguide-gallery4"></div>
      <div className="mhguide-team5">
        <Team14></Team14>
      </div>
      <div className="mhguide-contact6"></div>
      <div className="mhguide-footer5">
        <Footer1 rootClassName="footer1-root-class-name1"></Footer1>
      </div>
    </div>
  )
}

export default MHGUIDE

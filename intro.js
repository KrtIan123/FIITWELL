import React from 'react'

import PropTypes from 'prop-types'

import './intro.css'

const Intro = (props) => {
  return (
    <div
      className={`intro-header30 thq-section-padding ${props.rootClassName} `}
    >
      <div className="intro-container">
        <h1 className="intro-text">{props.heading}</h1>
        <h1 className="intro-text1">{props.heading2}</h1>
      </div>
      <div className="intro-max-width thq-section-max-width">
        <div className="intro-content"></div>
        <p className="intro-text2 thq-body-large">{props.content1}</p>
      </div>
    </div>
  )
}

Intro.defaultProps = {
  heading1:
    'Wellness isn’t all about gains. To be fit is to live a lifestyle that maintains what we consider are the 4 key factors for proper wellness. These are: Physical Fitness, Nutrition, Mental Health, and Social Health. FIITWELL aims to provide users with cohesive and accessible guide to achieve personal wellness.',
  heading2: 'FIITWELL',
  heading: 'WELCOME TO',
  rootClassName: '',
  image1Alt: 'image',
  content1:
    'Wellness isn’t all about gains. To be fit is to live a lifestyle that maintains what we consider are the 4 key factors for proper wellness. These are: Physical Fitness, Nutrition, Mental Health, and Social Health. FIITWELL aims to provide users with cohesive and accessible guide to achieve personal wellness.',
  action1: 'Main action',
  action2: 'Secondary action',
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
}

Intro.propTypes = {
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Intro

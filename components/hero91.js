import React from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src="https://www.shutterstock.com/image-photo/balanced-diet-food-background-nutrition-600nw-2290907759.jpg"
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text1 thq-body-large">{props.content1}</p>
          <div className="hero91-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI4NTk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Get Started',
  action1: 'Learn More',
  content1: 'Set proper meals for your preference required nutritional intake.',
  image1Alt: 'FIITWELL Image',
  heading1: 'DIETARY PLANS',
}

Hero91.propTypes = {
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero91

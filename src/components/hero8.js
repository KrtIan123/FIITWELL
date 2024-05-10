import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div
      className={`hero8-header26 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
            <p className="hero8-text1 thq-body-large">{props.content1}</p>
            <div className="hero8-actions"></div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src="https://cdn.sanity.io/images/ruord509/production/8d475def83f4b88f9cb74ba53c790713035627da-2560x1707.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  action1: 'Learn More',
  image1Alt: 'FIITWELL platform promoting personal growth through fitness',
  heading1:
    'Unlock Your Social Wellness: Building Connections for a Healthier Life',
  content1:
    'Join FIITWELL to embark on a journey towards holistic wellness and personal growth.',
  action2: 'Get Started',
  image1Src:
    'https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDU1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
}

Hero8.propTypes = {
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero8

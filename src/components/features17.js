import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div
      className={`features17-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features17-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Slogan: 'Tailored workouts to fit your goals and schedule',
  feature1ImageAlt: 'Personalized Fitness Plans',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1NjA1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Fitness Plans',
  rootClassName: '',
  feature1Description:
    "FIITWELL offers personalized fitness plans designed by experts to help you achieve your fitness goals efficiently. Whether you're a beginner or an experienced athlete, our customized workouts will fit your needs and schedule.",
}

Features17.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features17

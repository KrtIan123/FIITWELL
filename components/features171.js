import React from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div
      className={`features171-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src="https://goodwinliving.org/wp-content/uploads/2020/10/Photo_2020_1009-Comprehensive-Exercise.jpg"
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content">
          <div className="features171-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features171-content1">
              <h2 className="features171-text1 thq-heading-2">
                {props.feature1Title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features171.defaultProps = {
  rootClassName: '',
  feature1Title: 'Personalized Fitness Plans',
  feature1Description:
    'Get access to customized workout plans designed by fitness experts to help you reach your fitness goals efficiently.',
  feature1Slogan: 'Tailored workouts to fit your goals and schedule',
  feature1ImageAlt: 'Personalized Fitness Plans Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1488551511020-571c741f122a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1NjA1NHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features171.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features171

import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div
      className={`gallery1-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
          <iframe
            src="https://www.strongrfastr.com/ai_workout_builder_generator"
            className="gallery1-iframe"
          ></iframe>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container"></div>
          <div className="gallery1-container1"></div>
          <div className="gallery1-container2"></div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1604908815567-c9727d53f92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1NjA1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Fitness Workout Image',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'WORKOUT BUILDER',
  image3Src:
    'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1NjA1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'PlaceholderImage1302',
  image2Alt: 'PlaceholderImage1302',
  content1: 'Create your own custom workout with this tool.',
  rootClassName: '',
}

Gallery1.propTypes = {
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Gallery1

import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className={`hero3-header9 ${props.rootClassName} `}>
      <img
        alt={props.image1Alt}
        src="https://st2.depositphotos.com/2171279/7048/i/450/depositphotos_70480119-stock-photo-sportsmen-fit-male-trainer-man.jpg"
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-flex-row thq-section-max-width">
          <div className="hero3-column">
            <h1 className="hero3-text thq-heading-1">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="hero3-text1 thq-body-large">{props.content1}</p>
            <div className="hero3-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1567013127542-490d757e51fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1NjA1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Join FIITWELL to embark on a journey towards holistic wellness and personal growth.',
  image1Alt: 'FIITWELL logo',
  action2: 'Explore Programs',
  heading1: 'Transform Your Workouts with FIITWELL',
  rootClassName: '',
  action1: 'Get Started',
}

Hero3.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero3

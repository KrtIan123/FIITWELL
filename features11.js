import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div
      className={`features11-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features11-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features11-content">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features11-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature3ImageAlt: 'Nutrition Guidance Image',
  feature1Title: 'Personalized Fitness Plans',
  feature3Title: 'Nutrition Guidance',
  feature3Description:
    'Get expert advice on nutrition and meal planning to support your fitness journey.',
  sectionTitle: 'Features',
  feature2Description:
    'Engage in friendly competitions and challenges with the FIITWELL community to stay motivated.',
  mainAction: 'Access Personalized Fitness Plans',
  sectionDescription:
    'Explore the key features that FIITWELL offers to help you achieve overall wellness and lifestyle balance.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1625591243810-fb58c8762284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDg3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Empowering Your Mind and Body',
  feature2Title: 'Community Challenges',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1501747315-124a0eaca060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDg3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Community Challenges Image',
  feature1Description:
    'Receive customized workout plans tailored to your fitness goals and preferences.',
  rootClassName: '',
  secondaryAction: 'Join Community Challenges for Motivation',
  feature1ImageAlt: 'Personalized Fitness Plans Image',
}

Features11.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2Description: PropTypes.string,
  mainAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features11

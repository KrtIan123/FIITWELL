import React from 'react'

import PropTypes from 'prop-types'

import './features12.css'

const Features12 = (props) => {
  return (
    <div
      className={`features12-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features12-max-width thq-section-max-width">
        <div className="thq-flex-row features12-section-title">
          <div className="features12-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features12-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features12-content">
          <div className="features12-row thq-flex-row">
            <div className="features12-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features12-feature1-image"
              />
              <div className="features12-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features12-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features12-feature2-image"
              />
              <div className="features12-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features12-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features12-feature3-image"
              />
              <div className="features12-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features12-actions"></div>
      </div>
    </div>
  )
}

Features12.defaultProps = {
  sectionDescription: 'Optimizing Nutrition: Three Keys to a Healthier Diet"',
  slogan: 'Shape Your Body and Mind for Wellness',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1602594748821-6df031e275e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI4NTk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1469286714608-0defd688c4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI4NTk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'Access Guides and Tools',
  feature1ImageAlt: 'Personalized Fitness Plans Image',
  rootClassName: '',
  feature3ImageAlt: 'Mental Health Support Image',
  feature1Description:
    "Incorporate a wide variety of fruits, vegetables, whole grains, lean proteins, and healthy fats into your diet. Aim to include foods from all food groups to ensure you're getting a diverse range of nutrients.",
  feature1Title: 'Eat a Variety of Nutrient-Dense Foods:',
  feature3Description:
    'Access resources and strategies to improve mental well-being and reduce stress.',
  feature3Title: 'Mental Health Support',
  sectionTitle: 'Features',
  secondaryAction: 'Join FIITWELL Community',
  feature2Title: 'Nutrition Guidance',
  feature2Description:
    'Minimize your intake of processed foods, sugary snacks, and beverages high in added sugars. Instead, opt for whole, minimally processed foods whenever possible. Check food labels and ingredient lists to make informed choices.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1613618958001-ee9ad8f01f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI4NTk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Nutrition Guidance Image',
}

Features12.propTypes = {
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
}

export default Features12

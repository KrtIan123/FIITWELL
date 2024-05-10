import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div
      className={`features1-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  sectionDescription: '"Building Bridges: Nurturing Social Wellness',
  secondaryAction: 'Nutrition Guidance',
  feature3Description:
    'When interacting with others, make a conscious effort to listen attentively and empathetically. Show genuine interest in what others have to say, ask questions, and respond thoughtfully. Effective communication is key to building strong and fulfilling relationships.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDU1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'Personalized Fitness Plans',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1543363575-d306a0b37c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDU1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Community Support Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1610414409087-8a17b1dc4e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDU1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Self-reflection allows you to understand yourself better, including your thoughts, feelings, and behaviors. This self-awareness is crucial for personal growth and development.',
  sectionTitle: 'Features',
  rootClassName: '',
  feature2Title: 'Cultivate Meaningful Relationships',
  feature1ImageAlt: 'Customized Workouts Image',
  feature2ImageAlt: 'Mindfulness Resources Image',
  feature1Title: 'Self Reflection',
  slogan: 'Shape Your Body and Mind',
  feature2Description:
    'Invest time and effort into building and maintaining strong, healthy relationships with friends, family, and community members. Quality relationships provide emotional support, companionship, and a sense of belonging.',
  feature3Title: 'Practice Active Listening:',
}

Features1.propTypes = {
  sectionDescription: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features1

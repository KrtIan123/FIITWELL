import React from 'react'

import PropTypes from 'prop-types'

import './faq11.css'

const FAQ11 = (props) => {
  return (
    <div className={`faq11-faq7 thq-section-padding ${props.rootClassName} `}>
      <div className="faq11-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq11-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq11-list">
          <div className="faq11-list-item1">
            <p className="faq11-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq11-list-item2">
            <p className="faq11-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq11-list-item3">
            <p className="faq11-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq11-list-item4">
            <p className="faq11-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq11-list-item5">
            <p className="faq11-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq11-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq11-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq11-container">
            <button className="thq-button-outline faq11-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ11.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq3Question: 'Is FIITWELL suitable for all fitness levels?',
  heading1: 'FAQs',
  faq5Question: 'Is FIITWELL only focused on physical fitness?',
  action1: 'Contact',
  heading2: 'Still have a question?',
  faq2Question: 'How can FIITWELL help me improve my overall wellness?',
  rootClassName: '',
  faq1Answer:
    'FIITWELL is a platform dedicated to helping individuals achieve personal growth through physical and mental fitness, focusing on key areas such as Physical Fitness, Nutrition, Mental Health, and Social Wellness.',
  faq3Answer:
    'Yes, FIITWELL is designed to cater to individuals of all fitness levels, from beginners to advanced practitioners. Our platform offers a variety of programs and resources that can be tailored to meet your specific needs and goals.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq4Question: 'How can I get started with FIITWELL?',
  faq5Answer:
    'While physical fitness is a key component of FIITWELL, our platform also emphasizes the importance of nutrition, mental health, and social wellness in achieving overall well-being. We believe in a holistic approach to personal growth.',
  faq4Answer:
    'Getting started with FIITWELL is easy! Simply create an account on our platform, explore the available resources and programs, set your wellness goals, and begin your journey towards personal growth and well-being.',
  faq1Question: 'What is FIITWELL?',
  faq2Answer:
    'FIITWELL provides resources, guidance, and support to help you enhance your physical fitness, adopt healthier nutrition habits, prioritize your mental well-being, and cultivate positive social connections.',
}

FAQ11.propTypes = {
  content1: PropTypes.string,
  faq3Question: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question: PropTypes.string,
  action1: PropTypes.string,
  heading2: PropTypes.string,
  faq2Question: PropTypes.string,
  rootClassName: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  content2: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Answer: PropTypes.string,
}

export default FAQ11

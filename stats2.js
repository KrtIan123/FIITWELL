import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div
      className={`stats2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="stats2-max-width thq-section-max-width">
        <iframe
          src="https://www.nih.gov/sites/default/files/health-info/wellness-toolkits/social-wellness-checklist.pdf"
          className="stats2-iframe"
        ></iframe>
        <div className="stats2-container1 thq-flex-column"></div>
        <div className="stats2-container2 thq-flex-column">
          <h2 className="stats2-text thq-heading-2">{props.heading1}</h2>
          <p className="stats2-text1 thq-body-large">{props.content2}</p>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: 'Physical Fitness',
  image1Alt: 'Fitness workout',
  stat3Description: 'Connect with a supportive community',
  rootClassName: '',
  stat1Description: 'Enhance physical health and overall well-being',
  stat2Description: 'Improve strength, flexibility, and endurance',
  heading1: 'Social Wellness Checklist',
  content2:
    'Enhance your social skills and add some more color to your life by following this short guidebook and checklist from the National Institute of Health.',
  content1: 'Customized workout plans for all fitness levels',
  stat4: 'Nutrition',
  stat3: 'Social Wellness',
  stat2: 'Mental Health',
  image1Src:
    'https://images.unsplash.com/photo-1623858437161-90d281564b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI3MDU1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  stat4Description: 'Access to healthy recipes and meal plans',
}

Stats2.propTypes = {
  stat1: PropTypes.string,
  image1Alt: PropTypes.string,
  stat3Description: PropTypes.string,
  rootClassName: PropTypes.string,
  stat1Description: PropTypes.string,
  stat2Description: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  stat4: PropTypes.string,
  stat3: PropTypes.string,
  stat2: PropTypes.string,
  image1Src: PropTypes.string,
  stat4Description: PropTypes.string,
}

export default Stats2

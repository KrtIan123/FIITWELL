import React from 'react'

import PropTypes from 'prop-types'

import './mh-intro.css'

const MHIntro = (props) => {
  return (
    <div className="mh-intro-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src="https://static-cse.canva.com/blob/983565/PhotographyAsTherapy14.jpg"
        className="mh-intro-image"
      />
      <div className="mh-intro-container"></div>
      <div className="mh-intro-max-width thq-section-max-width">
        <div className="mh-intro-content">
          <h1 className="mh-intro-text thq-heading-1">{props.heading1}</h1>
          <h1 className="mh-intro-text1">{props.heading2}</h1>
          <p className="mh-intro-text2 thq-body-large">{props.content1}</p>
        </div>
      </div>
    </div>
  )
}

MHIntro.defaultProps = {
  action2: 'Get Started',
  content1:
    'Your journey to mental wellbeing starts here, find purpose and set goals. Fulfillment and accomplishment comes when you try instead of giving up, so try and do your best.',
  image1Src:
    'https://images.unsplash.com/photo-1483858740158-d8d0c191bbe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'FIITWELL Platform Image',
  heading2: 'GUIDE',
  action1: 'Learn More',
  heading: 'Heading',
  heading1: 'MENTAL WELLNESS',
}

MHIntro.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading2: PropTypes.string,
  action1: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default MHIntro

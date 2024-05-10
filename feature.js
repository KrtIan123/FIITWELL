import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div className="feature-layout251 thq-section-padding">
      <div className="feature-max-width thq-section-max-width">
        <div className="thq-flex-row feature-section-title">
          <div className="feature-column thq-flex-column">
            <h2 className="feature-text thq-heading-2">{props.sectionTitle}</h2>
          </div>
          <span className="feature-text1 thq-body-small">
            {props.sectionDescription}
          </span>
        </div>
        <div className="feature-content">
          <div className="feature-row thq-flex-row">
            <div className="feature-feature1 thq-flex-column">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="feature-image"
              />
            </div>
            <div className="feature-feature2 thq-flex-column">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="feature-image1"
              />
            </div>
            <div className="feature-feature3 thq-flex-column">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="feature-image2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Feature.defaultProps = {
  imageSrc2: '/image_5-900w.webp',
  imageAlt: 'image',
  secondaryAction: 'Secondary action',
  imageAlt1: 'image',
  feature2Title: 'Explore our key features',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature3Title: 'Explore our key features',
  feature1Title: 'Explore our key features',
  feature2ImageAlt: 'PlaceholderImage1314',
  imageSrc: '/image_4-500h.webp',
  sectionTitle: 'SHAPE YOUR BODY AND MIND',
  imageAlt2: 'image',
  mainAction: 'Learn More',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1ImageAlt: 'PlaceholderImage1314',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  imageSrc1: '/image_3-900w.webp',
  sectionDescription:
    'Develop personal growth through physical and mental fitness. Nothing should hold you back from reaching your potential.',
  slogan: 'Slogan',
}

Feature.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt: PropTypes.string,
  secondaryAction: PropTypes.string,
  imageAlt1: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  imageAlt2: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
}

export default Feature

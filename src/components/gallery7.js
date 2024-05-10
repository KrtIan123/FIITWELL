import React from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div className="gallery7-gallery3 thq-section-padding">
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery7-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery7-container">
          <div className="gallery7-content">
            <div className="gallery7-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image4Src:
    'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Explore images showcasing our various programs and activities focused on physical and mental wellness.',
  heading1: 'Gallery',
  image7Src:
    'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Meditation and mindfulness practice',
  image3Alt: 'Group fitness class',
  image2Alt: 'Healthy meal preparation',
  image1Alt: 'Yoga session in nature',
  image3Src:
    'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1506395308321-904a71783d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Personal growth workshop',
  image6Alt: 'Social wellness event',
  image6Src:
    'https://images.unsplash.com/photo-1630003363031-bce0cd6d5e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Outdoor workout session',
}

Gallery7.propTypes = {
  image4Src: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image5Alt: PropTypes.string,
}

export default Gallery7

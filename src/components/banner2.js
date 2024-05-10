import React from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div className="banner2-container thq-section-padding">
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container1">
          <h2 className="banner2-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner2-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          {props.action1}
        </button>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  heading1: 'Unlock Your Full Potential with FIITWELL',
  action1: 'Get Started',
  video1Poster:
    'https://images.pexels.com/videos/7357296/pictures/preview-0.jpeg',
  video1Src:
    'https://videos.pexels.com/video-files/7357296/7357296-hd_720_1366_30fps.mp4',
  content1:
    'Join us on a journey to transform your physical and mental well-being. Embrace a healthier lifestyle and reach your true potential with our expert guidance.',
}

Banner2.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  video1Poster: PropTypes.string,
  video1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner2

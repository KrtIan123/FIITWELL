import React from 'react'

import PropTypes from 'prop-types'

import './logos8.css'

const Logos8 = (props) => {
  return (
    <div className="logos8-container thq-section-padding">
      <div className="logos8-max-width thq-section-max-width">
        <div className="logos8-container1">
          <h2 className="logos8-text thq-heading-2">{props.heading1}</h2>
          <p className="logos8-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="logos8-container2 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos8-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos8-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos8-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos8-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos8-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos8-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos8-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos8-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos8.defaultProps = {
  logo2Alt: 'Logo2',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'Logo4',
  logo3Alt: 'Logo3',
  logo7Alt: 'Logo',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo6Alt: 'Logo6',
  logo8Alt: 'Logo',
  heading1:
    "Trusted by the world's best companies social proof to build credibility",
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Logo5',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'FIITWELL Logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
}

Logos8.propTypes = {
  logo2Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo7Alt: PropTypes.string,
  content1: PropTypes.string,
  logo2Src: PropTypes.string,
  logo8Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo8Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo7Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo5Src: PropTypes.string,
}

export default Logos8

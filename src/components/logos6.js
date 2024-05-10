import React from 'react'

import PropTypes from 'prop-types'

import './logos6.css'

const Logos6 = (props) => {
  return (
    <div
      className={`logos6-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos6-container01 thq-section-max-width">
        <div className="logos6-container02"></div>
        <h2 className="logos6-heading thq-heading-2">{props.heading1}</h2>
        <div className="logos6-container03">
          <div className="logos6-container04">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos6-logo1 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container05">
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos6-logo2 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container06">
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos6-logo3 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container07">
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos6-logo4 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container08">
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos6-logo5 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container09">
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos6-logo6 thq-img-ratio-16-9"
            />
          </div>
          <div className="logos6-container10">
            <img
              alt={props.logo7Alt}
              src={props.logo7Src}
              className="logos6-logo7 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Logos6.defaultProps = {
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'Logo4',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  rootClassName: '',
  logo3Alt: 'Logo3',
  logo6Alt: 'Logo6',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo1Alt: 'FIITWELL Logo',
  heading1:
    "Trusted by the world's best companies social proof to build credibility",
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Alt: 'Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo2Alt: 'Logo2',
  logo5Alt: 'Logo5',
}

Logos6.propTypes = {
  logo1Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  rootClassName: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo7Src: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
}

export default Logos6

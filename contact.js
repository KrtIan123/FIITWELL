import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div
      className={`contact-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content">
            <h2 className="contact-text1 thq-heading-2">{props.heading1}</h2>
            <p className="contact-text2 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                className=""
              ></path>
            </svg>
            <div className="contact-contact-info">
              <div className="contact-content2">
                <h3 className="contact-text3 thq-heading-3">Email</h3>
                <p className="contact-text4 thq-body-large">{props.content3}</p>
              </div>
              <span className="contact-email thq-body-small">
                {props.email2}
              </span>
            </div>
          </div>
          <div className="contact-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                className=""
              ></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content4">
                <h3 className="contact-text5 thq-heading-3">Phone</h3>
                <p className="contact-text6 thq-body-large">{props.content4}</p>
              </div>
              <span className="contact-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  phone1: '09676336390',
  content2: 'Get in touch with us today!',
  email2: 'krtinlavega@gmail.com',
  content3:
    'Feel free to send us an email for feedback or other matters regarding our website',
  address1: '456 Test Ave, Bucharest',
  content1:
    'Below are some ways to keep in touch with the developers of this site.',
  content5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Contact us',
  rootClassName: '',
  content4:
    'Call or text us through the provided contact info below for questions and feedbacks',
}

Contact.propTypes = {
  phone1: PropTypes.string,
  content2: PropTypes.string,
  email2: PropTypes.string,
  content3: PropTypes.string,
  address1: PropTypes.string,
  content1: PropTypes.string,
  content5: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  content4: PropTypes.string,
}

export default Contact

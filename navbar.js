import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="navbar-image"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <Link to="/home1" className="navbar-navlink">
              <h1 className="navbar-heading">{props.heading}</h1>
            </Link>
            <div
              data-thq="thq-dropdown"
              className="navbar-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle"
              >
                <span className="navbar-text">GUIDES</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle01"
                  >
                    <Link to="/ph-guide" className="navbar-navlink1 button">
                      <span className="navbar-text01">{props.text}</span>
                      <img
                        alt={props.imageAlt1}
                        src={props.imageSrc1}
                        className="navbar-image01"
                      />
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle02"
                  >
                    <Link to="/mh-guide" className="navbar-navlink2 button">
                      <span className="navbar-text02">{props.text1}</span>
                      <img
                        alt={props.imageAlt2}
                        src={props.imageSrc2}
                        className="navbar-image02"
                      />
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle03"
                  >
                    <Link to="/soc-guide" className="navbar-navlink3 button">
                      <span className="navbar-text03">{props.text2}</span>
                      <img
                        alt={props.imageAlt3}
                        src={props.imageSrc3}
                        className="navbar-image03"
                      />
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle04"
                  >
                    <Link to="/diet" className="navbar-navlink4 button">
                      <span className="navbar-text04">
                        <span>{props.text3}</span>
                        <br></br>
                      </span>
                      <img
                        alt={props.imageAlt4}
                        src={props.imageSrc4}
                        className="navbar-image04"
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar-image05"
              />
              <h1 className="navbar-text07">{props.heading}</h1>
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <h1 className="navbar-text08">{props.heading}</h1>
              <div
                data-thq="thq-dropdown"
                className="navbar-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle05"
                >
                  <span className="navbar-text09">GUIDES</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navbar-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="navbar-icon6">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navbar-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle06"
                    >
                      <span className="navbar-text10">{props.text}</span>
                      <img
                        alt={props.imageAlt1}
                        src={props.imageSrc1}
                        className="navbar-image06"
                      />
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle07"
                    >
                      <span className="navbar-text11">{props.text1}</span>
                      <img
                        alt={props.imageAlt2}
                        src={props.imageSrc2}
                        className="navbar-image07"
                      />
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle08"
                    >
                      <span className="navbar-text12">{props.text2}</span>
                      <img
                        alt={props.imageAlt3}
                        src={props.imageSrc3}
                        className="navbar-image08"
                      />
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-dropdown-toggle09"
                    >
                      <span className="navbar-text13">
                        <span>{props.text3}</span>
                        <br></br>
                      </span>
                      <img
                        alt={props.imageAlt4}
                        src={props.imageSrc4}
                        className="navbar-image09"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <span className="thq-link thq-body-small navbar-link2">
                {props.link2}
              </span>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  heading: 'HOME',
  link1: 'BMI CALCULATOR',
  imageAlt: 'image',
  text2: 'Social Wellness',
  action1: 'Action 1',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageSrc1: '/image-200h.webp',
  button1: 'Button',
  link2: 'BMI CALCULATOR',
  action2: 'Action 2',
  imageSrc4: '/image%20(1)-200h.webp',
  link4: 'Link4',
  imageSrc: '/image_6-200h.webp',
  link3: 'Link3',
  text3: 'Nutrition',
  button: 'Button',
  text: 'Physical Fitness',
  imageAlt4: 'image',
  logoAlt: 'logo',
  imageSrc2: '/image_2-200h.webp',
  link5: 'Link5',
  button2: 'Button',
  imageSrc3: '/image_1-200h.webp',
  text1: 'Mental Health',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  imageAlt2: 'image',
}

Navbar.propTypes = {
  heading: PropTypes.string,
  link1: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  action1: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button1: PropTypes.string,
  link2: PropTypes.string,
  action2: PropTypes.string,
  imageSrc4: PropTypes.string,
  link4: PropTypes.string,
  imageSrc: PropTypes.string,
  link3: PropTypes.string,
  text3: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  imageAlt4: PropTypes.string,
  logoAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  link5: PropTypes.string,
  button2: PropTypes.string,
  imageSrc3: PropTypes.string,
  text1: PropTypes.string,
  logoSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Navbar

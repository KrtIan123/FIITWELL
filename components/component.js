import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="app-component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
}

AppComponent.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default AppComponent

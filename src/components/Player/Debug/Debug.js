import './Debug.scss'

import PropTypes from 'prop-types'
import React from 'react'

const Debug = props => {
  const { currentCategory, currentSample, isLooping, isPlaying } = props

  return (
    <div className="c-debug">
      <ul className="c-debug__list">
        <li className="c-debug__list-item">
          currentCategory: {currentCategory}
        </li>
        <li className="c-debug__list-item">currentSample: {currentSample}</li>
        <li className="c-debug__list-item">
          isLooping: {isLooping.toString()}
        </li>
        <li className="c-debug__list-item">
          isPlaying: {isPlaying.toString()}
        </li>
      </ul>
    </div>
  )
}

Debug.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  currentSample: PropTypes.string.isRequired,
  isLooping: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
}

export default Debug

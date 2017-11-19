import PropTypes from 'prop-types'
import React from 'react'

import './PlayStop.css'

const PlayStop = ({
  isLoading,
  isPlaying,
  playStopClickHandler,
}) => {
  const determineLabel = () => {
    return isPlaying ? 'Stop' : 'Play'
  }

  const handleClick = () => {
    playStopClickHandler()
  }

  return (
    <div className="c-PlayStop">
      <button
        className="c-PlayStop__button"
        onClick={handleClick}
        disabled={isLoading}
      >
        {determineLabel()}
      </button>
    </div>
  )
}

PlayStop.propTypes = {
  isLoading:            PropTypes.bool.isRequired,
  isPlaying:            PropTypes.bool.isRequired,
  playStopClickHandler: PropTypes.func.isRequired,
}

export default PlayStop

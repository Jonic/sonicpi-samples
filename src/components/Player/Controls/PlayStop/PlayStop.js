import './PlayStop.css'
import PropTypes from 'prop-types'
import React from 'react'

const PlayStop = (props) => {
  const {
    isLoading,
    isPlaying,
    playStopClickHandler,
  } = props

  const determineLabel = () => {
    return isPlaying ? 'Stop' : 'Play'
  }

  const handleClick = () => {
    playStopClickHandler()
  }

  return (
    <div className="c-play-stop">
      <button
        className="c-play-stop__button"
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

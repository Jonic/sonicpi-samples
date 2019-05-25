import './PlayStop.scss'

import React, { useContext } from 'react'

import AppContext from 'contexts/App'
import PlayerContext from 'contexts/Player'

const PlayStop = () => {
  const { isLoading } = useContext(AppContext)
  const { isPlaying, setIsPlaying } = useContext(PlayerContext)

  const determineLabel = () => {
    return isPlaying ? 'Stop' : 'Play'
  }

  return (
    <div className="c-play-stop">
      <button
        className="c-play-stop__button"
        onClick={() => setIsPlaying(!isPlaying)}
        disabled={isLoading}
      >
        {determineLabel()}
      </button>
    </div>
  )
}

export default PlayStop

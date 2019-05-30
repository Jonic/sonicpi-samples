import './PlayStop.scss'

import React, { useContext } from 'react'

import AppContext from 'contexts/App'
import { AudioAnalyserCreateContext } from 'helpers/AudioAnalyser'
import PlayerContext from 'contexts/Player'

const PlayStop = () => {
  const { isLoading } = useContext(AppContext)

  const { audioContext, setAudioContext } = useContext(PlayerContext)
  const { isPlaying, setIsPlaying } = useContext(PlayerContext)

  const determineLabel = () => {
    return isPlaying ? 'Stop' : 'Play'
  }

  const playStopClickHandler = () => {
    if (!audioContext) {
      setAudioContext(AudioAnalyserCreateContext())
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="c-play-stop">
      <button
        className="c-play-stop__button"
        onClick={playStopClickHandler}
        disabled={isLoading}
      >
        {determineLabel()}
      </button>
    </div>
  )
}

export default PlayStop

import './Audio.scss'

import React, { useContext, useEffect, useRef, useState } from 'react'

import AppContext from 'contexts/App'
import { AudioAnalyserHelperInit } from 'helpers/AudioAnalyser'
import PlayerContext from 'contexts/Player'
import audioConfig from 'config/audio'
import { trackPlay } from 'helpers/Analytics'

const Audio = () => {
  const { setIsLoading, setVisData } = useContext(AppContext)
  const {
    audioContext,
    currentSample,
    isLooping,
    isPlaying,
    setIsPlaying,
  } = useContext(PlayerContext)

  const audioElement = useRef(null)
  const [audioSource, setAudioSource] = useState(null)

  useEffect(() => {
    setIsLoading(false)
    AudioAnalyserHelperInit(audioContext, audioElement.current, setVisData)
  }, [audioContext, audioElement, setIsLoading, setVisData])

  useEffect(() => {
    setAudioSource(
      `${process.env.PUBLIC_URL}/${
        audioConfig.source.mp3
      }/${currentSample}.mp3`,
    )
  }, [currentSample])

  useEffect(() => {
    setIsPlaying(false)
  }, [audioSource, setIsPlaying])

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play()
      return
    }

    audioElement.current.pause()
    audioElement.current.currentTime = 0
  }, [isPlaying])

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio
      className="c-audio"
      loop={isLooping}
      onEnded={() => !isLooping && setIsPlaying(false)}
      onPlay={() => trackPlay(currentSample)}
      ref={audioElement}
      src={audioSource}
    />
  )
}

export default Audio

import './Debug.scss'

import React, { useContext } from 'react'

import PlayerContext from 'contexts/Player'

const Debug = () => {
  const { currentCategory, currentSample, isLooping, isPlaying } = useContext(
    PlayerContext,
  )

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

export default Debug

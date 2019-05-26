import './Player.scss'

import Audio from './Audio/Audio'
import Controls from './Controls/Controls'
import Debug from './Debug/Debug'
import { PlayerContextProvider } from 'contexts/Player'
import React from 'react'

const Player = () => (
  <PlayerContextProvider>
    <div className="c-player">
      <section className="c-player__debug">
        <Debug />
      </section>

      <section className="c-player__controls">
        <Controls />
      </section>

      <Audio />
    </div>
  </PlayerContextProvider>
)

export default Player

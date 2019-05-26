import './LoopCheckbox.scss'

import React, { useContext } from 'react'

import AppContext from 'contexts/App'
import PlayerContext from 'contexts/Player'

const LoopCheckbox = () => {
  const { isLoading } = useContext(AppContext)
  const { isLooping, setIsLooping } = useContext(PlayerContext)

  return (
    <div className="c-loop-checkbox">
      Loop Sample:{' '}
      <input
        defaultChecked={isLooping}
        className="c-LoopCheckbox__input"
        disabled={isLoading}
        onClick={() => setIsLooping(!isLooping)}
        type="checkbox"
      />
    </div>
  )
}

export default LoopCheckbox

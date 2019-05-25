import './LoopCheckbox.scss'

import PropTypes from 'prop-types'
import React from 'react'

const LoopCheckbox = props => {
  const { isLoading, isLooping, loopCheckboxClickHandler } = props

  const handleClick = () => {
    loopCheckboxClickHandler()
  }

  return (
    <div className="c-loop-checkbox">
      Loop Sample:{' '}
      <input
        defaultChecked={isLooping}
        className="c-LoopCheckbox__input"
        disabled={isLoading}
        onClick={handleClick}
        type="checkbox"
      />
    </div>
  )
}

LoopCheckbox.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLooping: PropTypes.bool.isRequired,
  loopCheckboxClickHandler: PropTypes.func.isRequired,
}

export default LoopCheckbox

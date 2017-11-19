import PropTypes from 'prop-types'
import React from 'react'

import './LoopCheckbox.css'

const LoopCheckbox = ({
  isLoading,
  isLooping,
  loopCheckboxClickHandler,
}) => {
  const determineChecked = () => {
    if (isLooping) {
      return 'checked'
    }

    return false
  }

  const handleClick = () => {
    loopCheckboxClickHandler()
  }

  return (
    <div className="c-LoopCheckbox">
      Loop Sample:
      <input
        checked={determineChecked()}
        className="c-LoopCheckbox__input"
        disabled={isLoading}
        onClick={handleClick}
        type="checkbox"
      />
    </div>
  )
}

LoopCheckbox.propTypes = {
  isLoading:                PropTypes.bool.isRequired,
  isLooping:                PropTypes.bool.isRequired,
  loopCheckboxClickHandler: PropTypes.func.isRequired,
}

export default LoopCheckbox

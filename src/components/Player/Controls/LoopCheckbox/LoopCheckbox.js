import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoopCheckbox extends Component {
  determineChecked = () => {
    if (this.props.isLooping) {
      return 'checked'
    }

    return false
  }

  handleClick = () => {
    this.props.loopCheckboxClickHandler()
  }

  render() {
    return (
      <div className="c-LoopCheckbox">
        Loop Sample:
        <input
          checked={this.determineChecked()}
          className="c-LoopCheckbox__input"
          disabled={this.props.isLoading}
          onClick={this.handleClick}
          type="checkbox"
        />
      </div>
    )
  }
}

LoopCheckbox.propTypes = {
  isLoading:                PropTypes.bool.isRequired,
  isLooping:                PropTypes.bool.isRequired,
  loopCheckboxClickHandler: PropTypes.func.isRequired,
  updateIsLoading:          PropTypes.func.isRequired,
}

export default LoopCheckbox

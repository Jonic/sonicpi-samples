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
        <input
          type="checkbox"
          className="c-LoopCheckbox__input"
          onClick={this.handleClick}
          checked={this.determineChecked()}
        />
      </div>
    )
  }
}

LoopCheckbox.propTypes = {
  isLooping:                PropTypes.bool.isRequired,
  loopCheckboxClickHandler: PropTypes.func.isRequired,
}

export default LoopCheckbox

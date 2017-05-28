import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlayStop extends Component {
  determineLabel = () => {
    return this.props.isPlaying ? 'Stop' : 'Play'
  }

  handleClick = () => {
    this.props.playStopClickHandler()
  }

  render() {
    return (
      <div className="c-PlayStop">
        <button
          className="c-PlayStop__button"
          onClick={this.handleClick}
          disabled={this.props.isLoading}
        >
          {this.determineLabel()}
        </button>
      </div>
    )
  }
}

PlayStop.propTypes = {
  isLoading:            PropTypes.bool.isRequired,
  isPlaying:            PropTypes.bool.isRequired,
  playStopClickHandler: PropTypes.func.isRequired,
}

export default PlayStop

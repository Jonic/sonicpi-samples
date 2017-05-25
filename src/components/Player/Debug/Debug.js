import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Debug extends Component {
  render() {
    return (
      <div className="c-Debug">
        <h1>Sonic Pi Samples</h1>

        <ul>
          <li>currentCategory: {this.props.currentCategory}</li>
          <li>currentSample: {this.props.currentSample}</li>
          <li>isLooping: {this.props.isLooping.toString()}</li>
          <li>isPlaying: {this.props.isPlaying.toString()}</li>
        </ul>
      </div>
    )
  }
}

Debug.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  currentSample:   PropTypes.string.isRequired,
  isLooping:       PropTypes.bool.isRequired,
  isPlaying:       PropTypes.bool.isRequired,
}

export default Debug

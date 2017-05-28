import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Debug extends Component {
  render() {
    return (
      <div className="c-Debug">
        <ul className="c-Debug__list">
          <li className="c-Debug__list-item">currentCategory: {this.props.currentCategory}</li>
          <li className="c-Debug__list-item">currentSample: {this.props.currentSample}</li>
          <li className="c-Debug__list-item">isLooping: {this.props.isLooping.toString()}</li>
          <li className="c-Debug__list-item">isPlaying: {this.props.isPlaying.toString()}</li>
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

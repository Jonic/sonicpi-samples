import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Visualizer extends Component {
  render() {
    return (
      <div className="c-Visualizer">
        Visualizer
      </div>
    )
  }
}

Visualizer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
}

export default Visualizer

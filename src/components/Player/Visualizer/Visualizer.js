import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Visualizer extends Component {
  render() {
    return (
      <div className="c-Visualizer">
        {this.props.visData}
      </div>
    )
  }
}

Visualizer.propTypes = {
  visData:   PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
}

export default Visualizer

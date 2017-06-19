import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Visualizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width:  0,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    this.context = this.canvas.getContext('2d')
  }

  updateWindowDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width:  window.innerWidth,
    })
  }

  componentDidUpdate = () => {
    this.canvas.width = this.canvas.width

    let barWidth = this.state.width / this.props.bufferLength * 2.5
    let barHeight
    let x = 0

    for (let i = 0; i < this.props.bufferLength; i += 1) {
      barHeight = this.props.visData[i]

      this.context.fillStyle = `rgb(${barHeight + 100}, 50, 50)`
      this.context.fillRect(x, this.state.height - barHeight, barWidth, barHeight)

      x += barWidth + 1
    }
  }

  render() {
    return (
      <canvas
        className="c-Visualizer"
        height={this.state.height}
        ref={canvas => {
          this.canvas = canvas
        }}
        style={{
          height:   this.state.height,
          left:     0,
          position: 'absolute',
          top:      0,
          width:    this.state.width,
          zIndex:   -1,
        }}
        width={this.state.width}
      />
    )
  }
}

Visualizer.propTypes = {
  bufferLength: PropTypes.number.isRequired,
  isPlaying:    PropTypes.bool.isRequired,
  visData:      PropTypes.object,
}

export default Visualizer

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Visualizer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      width:  0,
    }

    this.className = 'c-Visualizer'
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions)
    this.updateWindowDimensions()
  }

  updateWindowDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width:  window.innerWidth,
    })
  }

  componentDidUpdate = () => {
    if (!this.props.visData) {
      return
    }

    this.context = this.canvas.getContext('2d')
    this.canvas.width = this.canvas.width

    let barWidth = this.state.width / this.props.bufferLength * 2
    let barHeight
    let x = 0

    for (let i = 0; i < this.props.bufferLength; i += 1) {
      barHeight = this.state.height / 100 * this.props.visData[i]

      this.context.fillStyle = `rgb(${barHeight + 100}, 127, ${255 - (barHeight - 100)})`
      this.context.fillRect(x, this.state.height - barHeight, barWidth, barHeight)

      x += barWidth
    }
  }

  render() {
    return (
      <canvas
        className={this.className}
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

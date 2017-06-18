import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { trackPlay } from '../../../helpers/Analytics'

class Audio extends Component {
  componentDidMount() {
    this.context = new AudioContext()
    this.source = this.context.createMediaElementSource(this.audioElement)
    this.analyser = this.context.createAnalyser()

    this.source.connect(this.analyser)
    this.source.connect(this.context.destination)

    this.analyser.fftSize = 2048
    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount)

    this.setPlayingState()

    this.renderVisualiserFrame()
  }

  componentDidUpdate() {
    if (this.isPlayingUpdated) {
      this.setPlayingState()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.isPlayingUpdated = false

    if (nextProps.isPlaying !== this.props.isPlaying) {
      this.isPlayingUpdated = true
    }
  }

  audioSource = () => {
    return `${process.env.PUBLIC_URL}/assets/audio/${this.props.currentSample}.mp3`
  }

  sampleEnded = () => {
    this.props.sampleEndedHandler()
  }

  setPlayingState = () => {
    if (this.props.isPlaying) {
      trackPlay()
      this.audioElement.play()
      return
    }

    this.audioElement.pause()
    this.audioElement.currentTime = 0
  }

  renderVisualiserFrame = () => {
    window.requestAnimationFrame(this.renderVisualiserFrame)
    this.analyser.getByteFrequencyData(this.frequencyData)
    this.props.updateVisData(this.frequencyData)
  }

  render() {
    return (
      <div className="c-Audio">
        <audio
          className="c-Audio__element"
          controls
          loop={this.props.isLooping}
          onEnded={this.sampleEnded}
          ref={audioElement => {
            this.audioElement = audioElement
          }}
          src={this.audioSource()}
        />
      </div>
    )
  }
}

Audio.propTypes = {
  currentSample:      PropTypes.string.isRequired,
  isLooping:          PropTypes.bool.isRequired,
  isPlaying:          PropTypes.bool.isRequired,
  sampleEndedHandler: PropTypes.func.isRequired,
  updateIsLoading:    PropTypes.func.isRequired,
  updateVisData:      PropTypes.func.isRequired,
}

export default Audio

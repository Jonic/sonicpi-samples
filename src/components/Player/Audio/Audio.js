import './Audio.css'
import { trackPlay } from '../../../helpers/Analytics'
import config from '../../../_config/audio'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Audio extends Component {
  componentDidMount() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      this.context = new window.AudioContext()
    } catch (e) {
      console.log('No Web Audio API support') // eslint-disable-line no-console
    }

    this.source = this.context.createMediaElementSource(this.audioElement)
    this.analyser = this.context.createAnalyser()

    this.source.connect(this.analyser)
    this.source.connect(this.context.destination)

    this.analyser.fftSize = 128
    this.bufferLength = this.analyser.frequencyBinCount
    this.frequencyData = new Uint8Array(this.bufferLength)

    this.setPlayingState()
    this.props.updateBufferLength(this.bufferLength)

    window.requestAnimationFrame(this.renderVisualiserFrame)
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
    return `${this.audioSourceDirectory()}/${this.props.currentSample}.mp3`
  }

  audioSourceDirectory = () => `${process.env.PUBLIC_URL}/${config.mp3_source_directory}`

  play = () => {
    trackPlay(this.props.currentSample)
    this.audioElement.play()
  }

  renderVisualiserFrame = () => {
    window.requestAnimationFrame(this.renderVisualiserFrame)
    this.analyser.getByteFrequencyData(this.frequencyData)
    this.props.updateVisData(this.frequencyData)
  }

  sampleEnded = () => {
    this.props.sampleEndedHandler()
  }

  setPlayingState = () => {
    if (this.props.isPlaying) {
      this.play()
    } else {
      this.stop()
    }
  }

  stop = () => {
    this.audioElement.pause()
    this.audioElement.currentTime = 0
  }

  render() {
    return (
      <audio
        className="c-Audio"
        // controls
        loop={this.props.isLooping}
        onEnded={this.sampleEnded}
        ref={audioElement => {
          this.audioElement = audioElement
        }}
        src={this.audioSource()}
      />
    )
  }
}

Audio.propTypes = {
  currentSample:      PropTypes.string.isRequired,
  isLooping:          PropTypes.bool.isRequired,
  isPlaying:          PropTypes.bool.isRequired,
  sampleEndedHandler: PropTypes.func.isRequired,
  updateIsLoading:    PropTypes.func.isRequired,
  updateBufferLength: PropTypes.func.isRequired,
  updateVisData:      PropTypes.func.isRequired,
}

export default Audio

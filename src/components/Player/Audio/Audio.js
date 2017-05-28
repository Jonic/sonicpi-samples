import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { trackPlay } from '../../../helpers/Analytics'

class Audio extends Component {
  componentDidUpdate() {
    this.setPlayingState()
  }

  componentWillUpdate(nextProps) {
    if (this.props.currentSample !== nextProps.currentSample) {
      this.loadSample(nextProps.currentSample)
    }
  }

  audioSource = () => {
    return `${process.env.PUBLIC_URL}/assets/audio/${this.props.currentSample}.mp3`
  }

  isLooping = () => {
    if (this.props.isLooping) {
      return 'loop'
    }

    return false
  }

  loadSample = () => {
    this.props.updateIsLoading(true)

    fetch(this.audioSource).then(() => {
      this.props.updateIsLoading(false)
    })
  }

  sampleEnded = () => {
    this.props.sampleEndedHandler()
  }

  setPlayingState = () => {
    if (this.props.isPlaying) {
      trackPlay(this.props.currentSample)
      this.updateAudioSource()
      return this.audioElement.play()
    }

    this.audioElement.pause()
    this.audioElement.currentTime = 0

    return null
  }

  updateAudioSource = () => {
    let context = new window.audioContext();
    let source = context.createMediaElementSource(this.audioElement);
    this.props.updateAudioSource(source)
  }

  render() {
    return (
      <div className="c-Audio">
        <audio
          className="c-Audio__element"
          controls
          loop={this.isLooping()}
          onEnded={this.sampleEnded}
          ref={
            (audioElement) => {
              this.audioElement = audioElement
            }
          }
          src={this.audioSource()}
        ></audio>
      </div>
    )
  }
}

Audio.propTypes = {
  currentSample:      PropTypes.string.isRequired,
  isLooping:          PropTypes.bool.isRequired,
  isPlaying:          PropTypes.bool.isRequired,
  sampleEndedHandler: PropTypes.func.isRequired,
  updateAudioSource:  PropTypes.func.isRequired,
  updateIsLoading:    PropTypes.func.isRequired,
}

export default Audio

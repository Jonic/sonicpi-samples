import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  trackPlay,
  trackPlayBySample,
} from '../../../helpers/Analytics'

class Audio extends Component {
  componentDidUpdate() {
    this.setPlayingState()
  }

  audioSource = () => {
    return `${process.env.PUBLIC_URL}/assets/audio/${this.props.currentSample}.mp3`
  }

  isLooping() {
    if (this.props.isLooping) {
      return 'loop'
    }

    return false
  }

  sampleEnded = () => {
    this.props.sampleEndedHandler()
  }

  setPlayingState = () => {
    if (this.props.isPlaying) {
      return this.audioElement.play()
    }

    this.audioElement.pause()
    this.audioElement.currentTime = 0

    return null
  }

  render() {
    return (
      <div className="c-Audio">
        <audio
          className="c-Audio__element"
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
}

export default Audio

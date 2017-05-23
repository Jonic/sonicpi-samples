import React, { Component } from 'react'

import samples from './_config/samples'

import Audio from './Audio/Audio'
import Controls from './Controls/Controls'
import Debug from './Debug/Debug'
import Visualizer from './Visualizer/Visualizer'

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSample: samples[0],
      isLooping:     false,
      isPlaying:     false,
      samples:       samples,
    }
  }

  loopCheckboxClickHandler = () => {
    this.setState({
      isLooping: !this.state.isLooping,
    })
  }

  playStopClickHandler = () => {
    this.toggleIsPlayingState()
  }

  sampleEndedHandler = () => {
    this.setIsPlayingStateTo(false)
  }

  sampleSelectorChangeHandler = (sample) => {
    this.setState({
      currentSample: sample,
      isPlaying:     false,
    })
  }

  setIsPlayingStateTo = (newState) => {
    this.setState({
      isPlaying: newState,
    })
  }

  toggleIsPlayingState = () => {
    this.setIsPlayingStateTo(!this.state.isPlaying)
  }

  render() {
    return (
      <div className="c-Player">
        <Debug
          currentSample={this.state.currentSample}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
        />

        <Audio
          currentSample={this.state.currentSample}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
          sampleEndedHandler={this.sampleEndedHandler}
        />

        <Controls
          currentSample={this.state.currentSample}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
          loopCheckboxClickHandler={this.loopCheckboxClickHandler}
          playStopClickHandler={this.playStopClickHandler}
          sampleSelectorChangeHandler={this.sampleSelectorChangeHandler}
          samples={this.state.samples}
        />

        <Visualizer
          isPlaying={this.state.isPlaying}
        />
      </div>
    )
  }
}

export default Player

import React, { Component } from 'react'

import categories from './_config/categories'
import samples from './_config/samples'

import Audio from './Audio/Audio'
import Controls from './Controls/Controls'
import Debug from './Debug/Debug'
import Visualizer from './Visualizer/Visualizer'

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories:      categories,
      currentCategory: null,
      currentSample:   samples[0],
      filteredSamples: samples,
      isLooping:       false,
      isPlaying:       false,
      samples:         samples,
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

  categorySelectorChangeHandler = (category) => {
    this.setState({
      currentCategory: category,
      isPlaying:       false,
    })
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
          currentCategory={this.state.currentCategory}
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
          categories={this.state.categories}
          categorySelectorChangeHandler={this.categorySelectorChangeHandler}
          currentCategory={this.state.currentCategory}
          currentSample={this.state.currentSample}
          filteredSamples={this.state.filteredSamples}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
          loopCheckboxClickHandler={this.loopCheckboxClickHandler}
          playStopClickHandler={this.playStopClickHandler}
          sampleSelectorChangeHandler={this.sampleSelectorChangeHandler}
        />

        <Visualizer
          isPlaying={this.state.isPlaying}
        />
      </div>
    )
  }
}

export default Player

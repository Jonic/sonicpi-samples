import React, { Component } from 'react'
import PropTypes from 'prop-types'

import categories from './_config/categories'
import samples from './_config/samples'

import Audio from './Audio/Audio'
import Controls from './Controls/Controls'
// import Debug from './Debug/Debug'
// import Visualizer from './Visualizer/Visualizer'

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bufferLength:    0,
      categories:      categories,
      currentCategory: categories[0],
      currentSample:   samples[0],
      filteredSamples: samples,
      isLooping:       false,
      isPlaying:       false,
      samples:         samples,
      visData:         null,
    }
  }

  getSamplesForCategory = category => {
    if (category === 'all') {
      return this.state.samples
    }

    let filteredSamples = []

    this.state.samples.map(sample => {
      if (sample.startsWith(category)) {
        filteredSamples.push(sample)
      }

      return null
    })

    return filteredSamples
  }

  loopCheckboxClickHandler = () => {
    this.setState({
      isLooping: !this.state.isLooping,
    })
  }

  playStopClickHandler = () => {
    this.toggleIsPlayingState()
  }

  categorySelectorChangeHandler = category => {
    let filteredSamples = this.getSamplesForCategory(category)

    this.setState({
      currentCategory: category,
      currentSample:   filteredSamples[0],
      filteredSamples: filteredSamples,
      isPlaying:       false,
    })
  }

  sampleEndedHandler = () => {
    this.setIsPlayingStateTo(false)
  }

  sampleSelectorChangeHandler = sample => {
    this.setState({
      currentSample: sample,
      isPlaying:     false,
    })
  }

  setIsPlayingStateTo = newState => {
    this.setState({
      isPlaying: newState,
    })
  }

  toggleIsPlayingState = () => {
    this.setIsPlayingStateTo(!this.state.isPlaying)
  }

  updateBufferLength = bufferLength => {
    this.setState({
      bufferLength: bufferLength,
    })
  }

  updateVisData = visData => {
    this.setState({
      visData: visData,
    })
  }

  render() {
    return (
      <div className="c-Player">
        <h1>Sonic Pi Samples</h1>

        {/* <Debug
          currentCategory={this.state.currentCategory}
          currentSample={this.state.currentSample}
          isLoading={this.props.isLoading}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
        /> */}

        <Controls
          categories={this.state.categories}
          categorySelectorChangeHandler={this.categorySelectorChangeHandler}
          currentCategory={this.state.currentCategory}
          currentSample={this.state.currentSample}
          filteredSamples={this.state.filteredSamples}
          isLoading={this.props.isLoading}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
          loopCheckboxClickHandler={this.loopCheckboxClickHandler}
          playStopClickHandler={this.playStopClickHandler}
          sampleSelectorChangeHandler={this.sampleSelectorChangeHandler}
          updateIsLoading={this.props.updateIsLoading}
        />

        <Audio
          currentSample={this.state.currentSample}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
          sampleEndedHandler={this.sampleEndedHandler}
          updateIsLoading={this.props.updateIsLoading}
          updateBufferLength={this.updateBufferLength}
          updateVisData={this.updateVisData}
        />

        {/* <Visualizer
          bufferLength={this.state.bufferLength}
          isPlaying={this.state.isPlaying}
          visData={this.state.visData}
        /> */}
      </div>
    )
  }
}

Player.propTypes = {
  isLoading:       PropTypes.bool.isRequired,
  updateIsLoading: PropTypes.func.isRequired,
}

export default Player

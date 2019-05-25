import './Player.scss'

import React, { Component } from 'react'

import Audio from './Audio/Audio'
import Controls from './Controls/Controls'
import Debug from './Debug/Debug'
import PropTypes from 'prop-types'
// import Visualizer from './Visualizer/Visualizer'
import categories from '../../config/categories'
import { getSamplesForCategory } from '../../helpers/SamplesCategories'
import samples from '../../config/samples'

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bufferLength: 0,
      categories: categories,
      currentCategory: categories[0],
      currentSample: samples[0],
      filteredSamples: samples,
      isLooping: false,
      isPlaying: false,
      samples: samples,
      visData: null,
    }
  }

  categorySelectorChangeHandler = category => {
    let filteredSamples = getSamplesForCategory(category)

    this.setState({
      currentCategory: category,
      currentSample: filteredSamples[0],
      filteredSamples: filteredSamples,
      isPlaying: false,
    })
  }

  loopCheckboxClickHandler = () => {
    this.setState({
      isLooping: !this.state.isLooping,
    })
  }

  playStopClickHandler = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    })
  }

  sampleEndedHandler = () => {
    this.setState({
      isPlaying: false,
    })
  }

  sampleSelectorChangeHandler = sample => {
    this.setState({
      currentSample: sample,
      isPlaying: false,
    })
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
      <div className="c-player">
        <Debug
          currentCategory={this.state.currentCategory}
          currentSample={this.state.currentSample}
          isLoading={this.props.isLoading}
          isLooping={this.state.isLooping}
          isPlaying={this.state.isPlaying}
        />

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
  isLoading: PropTypes.bool.isRequired,
  updateIsLoading: PropTypes.func.isRequired,
}

export default Player

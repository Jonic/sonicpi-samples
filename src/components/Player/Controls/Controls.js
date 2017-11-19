import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CategorySelector from './CategorySelector/CategorySelector'
import PlayStop from './PlayStop/PlayStop'
import LoopCheckbox from './LoopCheckbox/LoopCheckbox'
import SampleSelector from './SampleSelector/SampleSelector'

class Controls extends Component {
  render() {
    return (
      <div className="c-Controls">
        <CategorySelector
          categories={this.props.categories}
          categorySelectorChangeHandler={this.props.categorySelectorChangeHandler}
          currentCategory={this.props.currentCategory}
          isLoading={this.props.isLoading}
          updateIsLoading={this.props.updateIsLoading}
        />

        <SampleSelector
          currentSample={this.props.currentSample}
          filteredSamples={this.props.filteredSamples}
          isLoading={this.props.isLoading}
          sampleSelectorChangeHandler={this.props.sampleSelectorChangeHandler}
          updateIsLoading={this.props.updateIsLoading}
        />

        <LoopCheckbox
          isLoading={this.props.isLoading}
          isLooping={this.props.isLooping}
          loopCheckboxClickHandler={this.props.loopCheckboxClickHandler}
        />

        <PlayStop
          isLoading={this.props.isLoading}
          isPlaying={this.props.isPlaying}
          playStopClickHandler= {this.props.playStopClickHandler}
        />
      </div>
    )
  }
}

Controls.propTypes = {
  categories:                    PropTypes.array.isRequired,
  categorySelectorChangeHandler: PropTypes.func.isRequired,
  currentCategory:               PropTypes.string.isRequired,
  currentSample:                 PropTypes.string.isRequired,
  filteredSamples:               PropTypes.array.isRequired,
  isLoading:                     PropTypes.bool.isRequired,
  isLooping:                     PropTypes.bool.isRequired,
  isPlaying:                     PropTypes.bool.isRequired,
  loopCheckboxClickHandler:      PropTypes.func.isRequired,
  playStopClickHandler:          PropTypes.func.isRequired,
  sampleSelectorChangeHandler:   PropTypes.func.isRequired,
  updateIsLoading:               PropTypes.func.isRequired,
}

export default Controls

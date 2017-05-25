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
        <PlayStop
          isPlaying={this.props.isPlaying}
          playStopClickHandler= {this.props.playStopClickHandler}
        />

        <LoopCheckbox
          isLooping={this.props.isLooping}
          loopCheckboxClickHandler={this.props.loopCheckboxClickHandler}
        />

        <CategorySelector
          categories={this.props.categories}
          categorySelectorChangeHandler={this.props.categorySelectorChangeHandler}
          currentCategory={this.props.currentCategory}
        />

        <SampleSelector
          currentSample={this.props.currentSample}
          sampleSelectorChangeHandler={this.props.sampleSelectorChangeHandler}
          filteredSamples={this.props.filteredSamples}
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
  isPlaying:                     PropTypes.bool.isRequired,
  isLooping:                     PropTypes.bool.isRequired,
  loopCheckboxClickHandler:      PropTypes.func.isRequired,
  playStopClickHandler:          PropTypes.func.isRequired,
  sampleSelectorChangeHandler:   PropTypes.func.isRequired,
}

export default Controls

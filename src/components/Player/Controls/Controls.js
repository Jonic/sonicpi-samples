import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

        <SampleSelector
          currentSample={this.props.currentSample}
          sampleSelectorChangeHandler={this.props.sampleSelectorChangeHandler}
          samples={this.props.samples}
        />
      </div>
    )
  }
}

Controls.propTypes = {
  currentSample:               PropTypes.string.isRequired,
  isPlaying:                   PropTypes.bool.isRequired,
  isLooping:                   PropTypes.bool.isRequired,
  loopCheckboxClickHandler:    PropTypes.func.isRequired,
  playStopClickHandler:        PropTypes.func.isRequired,
  sampleSelectorChangeHandler: PropTypes.func.isRequired,
  samples:                     PropTypes.array.isRequired,
}

export default Controls

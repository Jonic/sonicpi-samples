import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SampleSelector extends Component {
  handleSampleChange = (event) => {
    this.props.sampleSelectorChangeHandler(event.target.value)
  }

  render() {
    return (
      <div className="c-SampleSelector">
        Sample Selector:
        <select
          className="c-SampleSelector__dropdown"
          disabled={this.props.isLoading}
          value={this.props.currentSample}
          onChange={this.handleSampleChange}
        >
          {
            this.props.filteredSamples.map((sample, index) => {
              return (
                <option
                  key={index}
                  value={sample}
                >
                  {sample}
                </option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

SampleSelector.propTypes = {
  currentSample:               PropTypes.string.isRequired,
  filteredSamples:             PropTypes.array.isRequired,
  isLoading:                   PropTypes.bool.isRequired,
  sampleSelectorChangeHandler: PropTypes.func.isRequired,
}

export default SampleSelector

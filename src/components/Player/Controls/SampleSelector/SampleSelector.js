import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SampleOption from './SampleOption/SampleOption'

class SampleSelector extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.sampleSelectorChangeHandler(event.target.value)
  }

  render() {
    return (
      <div className="c-SampleSelector">
        <select
          className="c-SampleSelector__dropdown"
          value={this.props.currentSample}
          onChange={this.handleChange}
        >
          {
            this.props.samples.map((sample, index) => {
              return (
                <SampleOption
                  key={index}
                  sample={sample}
                />
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
  sampleSelectorChangeHandler: PropTypes.func.isRequired,
  samples:                     PropTypes.array.isRequired,
}

export default SampleSelector

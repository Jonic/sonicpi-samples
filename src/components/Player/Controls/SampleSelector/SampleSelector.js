import PropTypes from 'prop-types'
import React from 'react'

import './SampleSelector.css'

const SampleSelector = ({
  currentSample,
  filteredSamples,
  isLoading,
  sampleSelectorChangeHandler,
}) => {
  const handleSampleChange = (event) => {
    sampleSelectorChangeHandler(event.target.value)
  }

  return (
    <div className="c-SampleSelector">
      Sample Selector:

      <select
        className="c-SampleSelector__dropdown"
        disabled={isLoading}
        value={currentSample}
        onChange={handleSampleChange}
      >
        {
          filteredSamples.map((sample, index) => {
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

SampleSelector.propTypes = {
  currentSample:               PropTypes.string.isRequired,
  filteredSamples:             PropTypes.array.isRequired,
  isLoading:                   PropTypes.bool.isRequired,
  sampleSelectorChangeHandler: PropTypes.func.isRequired,
}

export default SampleSelector

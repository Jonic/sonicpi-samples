import PropTypes from 'prop-types'
import React from 'react'

import './SampleSelector.css'

import Select from '../../../UI/Select/Select'

const SampleSelector = (props) => {
  const {
    currentSample,
    filteredSamples,
    isLoading,
    sampleSelectorChangeHandler,
  } = props

  return (
    <div className="c-SampleSelector">
      Sample Selector:
      {' '}
      <Select
        disabled={isLoading}
        onChange={sampleSelectorChangeHandler}
        options={filteredSamples}
        value={currentSample}
      />
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

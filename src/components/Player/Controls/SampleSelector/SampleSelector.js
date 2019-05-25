import './SampleSelector.scss'

import PropTypes from 'prop-types'
import React from 'react'
import Select from '../../../UI/Select/Select'

const SampleSelector = props => {
  const {
    currentSample,
    filteredSamples,
    isLoading,
    sampleSelectorChangeHandler,
  } = props

  return (
    <div className="c-sample-selector">
      Sample Selector:{' '}
      <Select
        className="c-sample-selector__select"
        disabled={isLoading}
        onChange={sampleSelectorChangeHandler}
        options={filteredSamples}
        value={currentSample}
      />
    </div>
  )
}

SampleSelector.propTypes = {
  currentSample: PropTypes.string.isRequired,
  filteredSamples: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  sampleSelectorChangeHandler: PropTypes.func.isRequired,
}

export default SampleSelector

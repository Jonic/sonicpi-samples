import './SampleSelector.scss'

import React, { useContext } from 'react'

import AppContext from 'contexts/App'
import PlayerContext from 'contexts/Player'
import Select from 'components/UI/Select/Select'

const SampleSelector = () => {
  const { isLoading } = useContext(AppContext)
  const { currentSample, filteredSamples, setCurrentSample } = useContext(
    PlayerContext,
  )

  return (
    <div className="c-sample-selector">
      Sample Selector:{' '}
      <Select
        className="c-sample-selector__select"
        disabled={isLoading}
        onChange={value => setCurrentSample(value)}
        options={filteredSamples}
        value={currentSample}
      />
    </div>
  )
}

export default SampleSelector

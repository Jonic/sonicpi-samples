import './Controls.css'
import CategorySelector from './CategorySelector/CategorySelector'
import LoopCheckbox from './LoopCheckbox/LoopCheckbox'
import PlayStop from './PlayStop/PlayStop'
import PropTypes from 'prop-types'
import React from 'react'
import SampleSelector from './SampleSelector/SampleSelector'

const Controls = (props) => {
  const {
    categories,
    categorySelectorChangeHandler,
    currentCategory,
    currentSample,
    filteredSamples,
    isLoading,
    isLooping,
    isPlaying,
    loopCheckboxClickHandler,
    playStopClickHandler,
    sampleSelectorChangeHandler,
    updateIsLoading,
  } = props

  return (
    <div className="c-Controls">
      <CategorySelector
        categories={categories}
        categorySelectorChangeHandler={categorySelectorChangeHandler}
        currentCategory={currentCategory}
        isLoading={isLoading}
        updateIsLoading={updateIsLoading}
      />

      <SampleSelector
        currentSample={currentSample}
        filteredSamples={filteredSamples}
        isLoading={isLoading}
        sampleSelectorChangeHandler={sampleSelectorChangeHandler}
        updateIsLoading={updateIsLoading}
      />

      <LoopCheckbox
        isLoading={isLoading}
        isLooping={isLooping}
        loopCheckboxClickHandler={loopCheckboxClickHandler}
      />

      <PlayStop
        isLoading={isLoading}
        isPlaying={isPlaying}
        playStopClickHandler= {playStopClickHandler}
      />
    </div>
  )
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

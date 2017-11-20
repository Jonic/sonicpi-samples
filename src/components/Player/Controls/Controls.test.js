import React from 'react'
import { shallow } from 'enzyme'
import Controls from './Controls'

const categories = []
const categorySelectorChangeHandler = jest.fn()
const currentCategory = ''
const currentSample = ''
const filteredSamples = []
const isLoading = false
const isLooping = false
const isPlaying = false
const loopCheckboxClickHandler = jest.fn()
const playStopClickHandler = jest.fn()
const sampleSelectorChangeHandler = jest.fn()
const updateIsLoading = jest.fn()

let wrapper

describe('<Controls />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Controls
        categories={categories}
        categorySelectorChangeHandler={categorySelectorChangeHandler}
        currentCategory={currentCategory}
        currentSample={currentSample}
        filteredSamples={filteredSamples}
        isLoading={isLoading}
        isLooping={isLooping}
        isPlaying={isPlaying}
        loopCheckboxClickHandler={loopCheckboxClickHandler}
        playStopClickHandler={playStopClickHandler}
        sampleSelectorChangeHandler={sampleSelectorChangeHandler}
        updateIsLoading={updateIsLoading}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-Controls')).toBePresent()
  })
})

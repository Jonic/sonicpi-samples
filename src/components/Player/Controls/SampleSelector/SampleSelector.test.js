import React from 'react'
import { shallow } from 'enzyme'
import SampleSelector from './SampleSelector'

const currentSample = ''
const filteredSamples = []
const isLoading = false
const sampleSelectorChangeHandler = jest.fn()

let wrapper

describe('<SampleSelector />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <SampleSelector
        currentSample={currentSample}
        filteredSamples={filteredSamples}
        isLoading={isLoading}
        sampleSelectorChangeHandler={sampleSelectorChangeHandler}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-SampleSelector')).toBePresent()
  })
})

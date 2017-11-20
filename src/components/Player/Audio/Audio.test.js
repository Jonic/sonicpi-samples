jest.mock('../../../helpers/Analytics')

import React from 'react'
import { shallow } from 'enzyme'
import Audio from './Audio'

const currentSample = ''
const isLooping = false
const isPlaying = false
const sampleEndedHandler = jest.fn()
const updateIsLoading = jest.fn()
const updateBufferLength = jest.fn()
const updateVisData = jest.fn()

global.AudioContext = {}
global.AudioContext.createMediaElementSource = jest.fn()

let wrapper

describe('<Audio />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Audio
        currentSample={currentSample}
        isLooping={isLooping}
        isPlaying={isPlaying}
        sampleEndedHandler={sampleEndedHandler}
        updateIsLoading={updateIsLoading}
        updateBufferLength={updateBufferLength}
        updateVisData={updateVisData}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-Audio')).toBePresent()
  })
})

jest.mock('../../../helpers/Analytics')

import 'web-audio-test-api'
import { shallow } from 'enzyme'
import Audio from './Audio'
import React from 'react'

const currentSample = ''
const isLooping = false
const isPlaying = false
const sampleEndedHandler = jest.fn()
const updateIsLoading = jest.fn()
const updateBufferLength = jest.fn()
const updateVisData = jest.fn()

let wrapper

// TODO: Unable to test createMediaElementSource - component likely requires refactoring
xdescribe('<Audio />', () => {
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

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-Audio')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

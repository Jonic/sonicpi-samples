import { shallow } from 'enzyme'
import categories from '../../_config/categories'
import Player from './Player'
import React from 'react'
import samples from '../../_config/samples'

const isLoading = false
const toggleIsLoading = jest.fn()
const updateIsLoading = jest.fn()

let wrapper

describe('<Player />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Player
        isLoading={isLoading}
        toggleIsLoading={toggleIsLoading}
        updateIsLoading={updateIsLoading}
      />
    )
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-Player')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('Methods', () => {
    describe('categorySelectorChangeHandler()', () => {
      describe('when user selects "all"', () => {
        it('sets state correctly', () => {
          let category = 'all'
          let expectedCurrentCategory = categories[0]
          let expectedCurrentSample = samples[0]
          let expectedFilteredSamples = samples

          wrapper.instance().categorySelectorChangeHandler(category)

          let newCurrentCategory = wrapper.state().currentCategory
          let newCurrentSample = wrapper.state().currentSample
          let newFilteredSamples = wrapper.state().filteredSamples

          expect(newCurrentCategory).toEqual(expectedCurrentCategory)
          expect(newCurrentSample).toEqual(expectedCurrentSample)
          expect(newFilteredSamples).toEqual(expectedFilteredSamples)
        })
      })

      describe('when user selects "sn"', () => {
        it('sets state correctly', () => {
          let category = 'sn'
          let filteredSamples = [
            'sn_dolf',
            'sn_dub',
            'sn_zome',
          ]
          let expectedCurrentCategory = category
          let expectedCurrentSample = filteredSamples[0]
          let expectedFilteredSamples = filteredSamples

          wrapper.instance().categorySelectorChangeHandler(category)

          let newCurrentCategory = wrapper.state().currentCategory
          let newCurrentSample = wrapper.state().currentSample
          let newFilteredSamples = wrapper.state().filteredSamples

          expect(newCurrentCategory).toEqual(expectedCurrentCategory)
          expect(newCurrentSample).toEqual(expectedCurrentSample)
          expect(newFilteredSamples).toEqual(expectedFilteredSamples)
        })
      })
    })

    describe('loopCheckboxClickHandler', () => {
      it('toggles `isLooping` state value', () => {
        let isLooping = wrapper.state().isLooping
        wrapper.instance().loopCheckboxClickHandler()
        expect(wrapper.state().isLooping).toEqual(!isLooping)
      })
    })

    describe('playStopClickHandler', () => {
      it('toggles `isPlaying` state value', () => {
        let isPlaying = wrapper.state().isPlaying
        wrapper.instance().playStopClickHandler()
        expect(wrapper.state().isPlaying).toEqual(!isPlaying)
      })
    })

    describe('sampleEndedHandler', () => {
      it('sets `isPlaying` state value to `false`', () => {
        wrapper.instance().sampleEndedHandler()
        expect(wrapper.state().isPlaying).toBeFalsy()
      })
    })

    describe('sampleSelectorChangeHandler', () => {
      it('sets state correctly', () => {
        let expectedCurrentSample = samples[0]
        let expectedIsPlaying = false

        wrapper.instance().sampleSelectorChangeHandler(expectedCurrentSample)

        let currentSample = wrapper.state().currentSample
        let isPlaying = wrapper.state().isPlaying

        expect(currentSample).toEqual(expectedCurrentSample)
        expect(isPlaying).toEqual(expectedIsPlaying)
      })
    })

    describe('updateBufferLength', () => {
      it('sets state correctly', () => {
        let expectedBufferLength = 64
        wrapper.instance().updateBufferLength(expectedBufferLength)
        expect(wrapper.state().bufferLength).toEqual(expectedBufferLength)
      })
    })

    describe('updateVisData', () => {
      it('sets state correctly', () => {
        let expectedVisData = {
          foo: 'bar',
        }
        wrapper.instance().updateVisData(expectedVisData)
        expect(wrapper.state().visData).toEqual(expectedVisData)
      })
    })
  })
})

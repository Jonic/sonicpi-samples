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

  it('renders without crashing', () => {
    expect(wrapper.find('.c-Player')).toBePresent()
  })

  describe('categorySelectorChangeHandler', () => {
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
})

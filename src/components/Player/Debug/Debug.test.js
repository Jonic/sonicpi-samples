import React from 'react'
import { shallow } from 'enzyme'
import Debug from './Debug'

const currentCategory = ''
const currentSample = ''
const isLooping = false
const isPlaying = false

let wrapper

describe('<Debug />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Debug
        currentCategory={currentCategory}
        currentSample={currentSample}
        isLooping={isLooping}
        isPlaying={isPlaying}
      />
    )
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-debug')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

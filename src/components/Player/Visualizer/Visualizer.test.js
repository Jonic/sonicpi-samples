import React from 'react'
import { shallow } from 'enzyme'
import Visualizer from './Visualizer'

const bufferLength = 0
const isPlaying = false
const visData = {}

let wrapper

describe('<Visualizer />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Visualizer
        bufferLength={bufferLength}
        isPlaying={isPlaying}
        visData={visData}
      />
    )
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-Visualizer')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

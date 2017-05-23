import React from 'react'
import { mount, shallow } from 'enzyme'
import Visualizer from './Visualizer'

let wrapper

describe('<Visualizer />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Visualizer />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <Visualizer />
    )
    expect(mountedWrapper.find('.c-Visualizer')).toBePresent()
  })
})

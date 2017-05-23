import React from 'react'
import { mount, shallow } from 'enzyme'
import Player from './Player'

let wrapper

describe('<Player />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Player />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <Player />
    )
    expect(mountedWrapper.find('.c-Player')).toBePresent()
  })
})

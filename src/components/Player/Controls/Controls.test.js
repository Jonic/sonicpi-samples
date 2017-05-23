import React from 'react'
import { mount, shallow } from 'enzyme'
import Controls from './Controls'

let wrapper

describe('<Controls />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Controls />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <Controls />
    )
    expect(mountedWrapper.find('.c-Controls')).toBePresent()
  })
})

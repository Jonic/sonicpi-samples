import React from 'react'
import { mount, shallow } from 'enzyme'
import Audio from './Audio'

let wrapper

describe('<Audio />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Audio />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <Audio />
    )
    expect(mountedWrapper.find('.c-Audio')).toBePresent()
  })
})

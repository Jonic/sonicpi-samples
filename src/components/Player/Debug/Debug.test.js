import React from 'react'
import { mount, shallow } from 'enzyme'
import Debug from './Debug'

let wrapper

describe('<Debug />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Debug />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <Debug />
    )
    expect(mountedWrapper.find('.c-Debug')).toBePresent()
  })
})

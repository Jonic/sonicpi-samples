import React from 'react'
import { mount, shallow } from 'enzyme'
import SampleSelector from './SampleSelector'

let wrapper

describe('<SampleSelector />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <SampleSelector />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <SampleSelector />
    )
    expect(mountedWrapper.find('.c-SampleSelector')).toBePresent()
  })
})

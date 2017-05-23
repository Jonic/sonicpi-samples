import React from 'react'
import { mount, shallow } from 'enzyme'
import LoopCheckbox from './LoopCheckbox'

let wrapper

describe('<LoopCheckbox />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoopCheckbox />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <LoopCheckbox />
    )
    expect(mountedWrapper.find('.c-LoopCheckbox')).toBePresent()
  })
})

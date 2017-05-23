import React from 'react'
import { mount, shallow } from 'enzyme'
import PlayStop from './PlayStop'

let wrapper

describe('<PlayStop />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <PlayStop />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <PlayStop />
    )
    expect(mountedWrapper.find('.c-PlayStop')).toBePresent()
  })
})

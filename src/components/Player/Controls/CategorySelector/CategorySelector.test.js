import React from 'react'
import { mount, shallow } from 'enzyme'
import CategorySelector from './CategorySelector'

let wrapper

describe('<CategorySelector />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <CategorySelector />
    )
  })

  it('renders without crashing', () => {
    const mountedWrapper = mount(
      <CategorySelector />
    )
    expect(mountedWrapper.find('.c-CategorySelector')).toBePresent()
  })
})

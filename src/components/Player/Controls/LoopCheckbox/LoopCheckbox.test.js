import React from 'react'
import { shallow } from 'enzyme'
import LoopCheckbox from './LoopCheckbox'

const isLoading                = false
const isLooping                = false
const loopCheckboxClickHandler = jest.fn()

let wrapper

describe('<LoopCheckbox />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoopCheckbox
        isLoading={isLoading}
        isLooping={isLooping}
        loopCheckboxClickHandler={loopCheckboxClickHandler}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-LoopCheckbox')).toBePresent()
  })
})

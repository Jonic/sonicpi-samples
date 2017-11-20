import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

const options = []
const onChange = jest.fn()
const value = ''
const disabled = false

let wrapper

describe('<Select />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Select
        options={options}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-Select')).toBePresent()
  })
})

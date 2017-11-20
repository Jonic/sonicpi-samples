jest.mock('../helpers/Analytics')

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

let wrapper

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-App')).toBePresent()
  })
})

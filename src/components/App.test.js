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

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-app')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

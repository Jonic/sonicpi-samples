import React from 'react'
import { shallow } from 'enzyme'
import Player from './Player'

const isLoading = false
const updateIsLoading = jest.fn()

let wrapper

describe('<Player />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Player
        isLoading={isLoading}
        updateIsLoading={updateIsLoading}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-Player')).toBePresent()
  })
})

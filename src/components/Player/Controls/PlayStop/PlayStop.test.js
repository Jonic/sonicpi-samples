import React from 'react'
import { shallow } from 'enzyme'
import PlayStop from './PlayStop'

const isLoading = false
const isPlaying = false
const playStopClickHandler = jest.fn()

let wrapper

describe('<PlayStop />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <PlayStop
        isLoading={isLoading}
        isPlaying={isPlaying}
        playStopClickHandler={playStopClickHandler}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-PlayStop')).toBePresent()
  })
})

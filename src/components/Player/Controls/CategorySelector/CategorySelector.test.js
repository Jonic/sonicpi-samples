import React from 'react'
import { shallow } from 'enzyme'
import CategorySelector from './CategorySelector'

const categories = []
const categorySelectorChangeHandler = jest.fn()
const currentCategory = ''
const isLoading = false

let wrapper

describe('<CategorySelector />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <CategorySelector
        categories={categories}
        categorySelectorChangeHandler={categorySelectorChangeHandler}
        currentCategory={currentCategory}
        isLoading={isLoading}
      />
    )
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-CategorySelector')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

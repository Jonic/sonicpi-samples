import './CategorySelector.scss'

import PropTypes from 'prop-types'
import React from 'react'
import Select from '../../../UI/Select/Select'

const CategorySelector = props => {
  const {
    categories,
    categorySelectorChangeHandler,
    currentCategory,
    isLoading,
  } = props

  return (
    <div className="c-category-selector">
      Category Selector:{' '}
      <Select
        className="c-category-selector__select"
        disabled={isLoading}
        onChange={categorySelectorChangeHandler}
        options={categories}
        value={currentCategory}
      />
    </div>
  )
}

CategorySelector.propTypes = {
  categories: PropTypes.array.isRequired,
  categorySelectorChangeHandler: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default CategorySelector

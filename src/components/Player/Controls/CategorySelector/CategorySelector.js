import PropTypes from 'prop-types'
import React from 'react'

import './CategorySelector.css'

const CategorySelector = ({
  categories,
  categorySelectorChangeHandler,
  currentCategory,
  isLoading,
}) => {
  const handleCategoryChange = (event) => {
    categorySelectorChangeHandler(event.target.value)
  }

  return (
    <div className="c-CategorySelector">
      Category Selector:
      <select
        className="c-CategorySelector__dropdown"
        disabled={isLoading}
        value={currentCategory}
        onChange={handleCategoryChange}
      >
        {
          categories.map((category, index) => {
            return (
              <option
                key={index}
                value={category}
              >
                {category}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

CategorySelector.propTypes = {
  categories:                    PropTypes.array.isRequired,
  categorySelectorChangeHandler: PropTypes.func.isRequired,
  currentCategory:               PropTypes.string.isRequired,
  isLoading:                     PropTypes.bool.isRequired,
}

export default CategorySelector

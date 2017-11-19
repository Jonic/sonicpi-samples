import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CategorySelector extends Component {
  handleCategoryChange = (event) => {
    this.props.categorySelectorChangeHandler(event.target.value)
  }

  render() {
    return (
      <div className="c-CategorySelector">
        Category Selector:
        <select
          className="c-CategorySelector__dropdown"
          disabled={this.props.isLoading}
          value={this.props.currentCategory}
          onChange={this.handleCategoryChange}
        >
          {
            this.props.categories.map((category, index) => {
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
}

CategorySelector.propTypes = {
  categories:                    PropTypes.array.isRequired,
  categorySelectorChangeHandler: PropTypes.func.isRequired,
  currentCategory:               PropTypes.string.isRequired,
  isLoading:                     PropTypes.bool.isRequired,
  updateIsLoading:               PropTypes.func.isRequired,
}

export default CategorySelector

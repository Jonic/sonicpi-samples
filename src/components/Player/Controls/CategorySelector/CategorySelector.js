import './CategorySelector.scss'

import React, { useContext } from 'react'

import AppContext from 'contexts/App'
import PlayerContext from 'contexts/Player'
import Select from 'components/UI/Select/Select'

const CategorySelector = () => {
  const { isLoading } = useContext(AppContext)
  const { categories, currentCategory, setCurrentCategory } = useContext(
    PlayerContext,
  )

  return (
    <div className="c-category-selector">
      Category Selector:{' '}
      <Select
        className="c-category-selector__select"
        disabled={isLoading}
        onChange={value => setCurrentCategory(value)}
        options={categories}
        value={currentCategory}
      />
    </div>
  )
}

export default CategorySelector

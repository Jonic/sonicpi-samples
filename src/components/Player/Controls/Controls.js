import './Controls.scss'

import CategorySelector from './CategorySelector/CategorySelector'
import LoopCheckbox from './LoopCheckbox/LoopCheckbox'
import PlayStop from './PlayStop/PlayStop'
import React from 'react'
import SampleSelector from './SampleSelector/SampleSelector'

const Controls = () => (
  <div className="c-controls">
    <CategorySelector />
    <SampleSelector />
    <LoopCheckbox />
    <PlayStop />
  </div>
)

export default Controls

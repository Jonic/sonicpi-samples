import PropTypes from 'prop-types'
import React from 'react'

import './Select.css'

const Select = (props) => {
  const {
    options,
    onChange,
    value,
    disabled,
  } = props

  return (
    <select
      className="c-Select"
      disabled={disabled}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {
        options.map((option, index) => {
          return (
            <option key={index} value={option}>{option}</option>
          )
        })
      }
    </select>
  )
}

Select.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  options:  PropTypes.array.isRequired,
  value:    PropTypes.string.isRequired,
}

export default Select

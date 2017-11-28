import './Select.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Select = (props) => {
  const {
    className,
    options,
    onChange,
    value,
    disabled,
  } = props

  return (
    <select
      className={classnames('c-select', className)}
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
  className: PropTypes.string,
  disabled:  PropTypes.bool.isRequired,
  onChange:  PropTypes.func.isRequired,
  options:   PropTypes.array.isRequired,
  value:     PropTypes.string.isRequired,
}

export default Select

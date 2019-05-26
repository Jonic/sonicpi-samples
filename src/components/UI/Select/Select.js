import './Select.scss'

import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const Select = ({ className, disabled, onChange, options, value }) => (
  // eslint-disable-next-line jsx-a11y/no-onchange
  <select
    className={classnames('c-select', className)}
    disabled={disabled}
    onChange={event => onChange(event.target.value)}
    value={value}
  >
    {options.map((option, index) => {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      )
    })}
  </select>
)

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
}

export default Select

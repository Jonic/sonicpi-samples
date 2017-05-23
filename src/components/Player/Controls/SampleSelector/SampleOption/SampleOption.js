import React from 'react'
import PropTypes from 'prop-types'

const SampleOption = ({ sample }) =>
  <option value={sample}>
    {sample}
  </option>

SampleOption.propTypes = {
  sample: PropTypes.string.isRequired,
}

export default SampleOption

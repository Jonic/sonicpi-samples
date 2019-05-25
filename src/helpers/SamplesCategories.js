import samples from '../config/samples'

const getSamplesForCategory = category => {
  if (category === 'all') {
    return samples
  }

  let filteredSamples = []

  samples.map(sample => {
    if (sample.startsWith(category)) {
      filteredSamples.push(sample)
    }

    return null
  })

  return filteredSamples
}

export { getSamplesForCategory }

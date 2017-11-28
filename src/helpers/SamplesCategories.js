const getSamplesForCategory = (category, samples) => {
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

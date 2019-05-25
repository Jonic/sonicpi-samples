import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import categoriesConfig from 'config/categories'
import { getSamplesForCategory } from 'helpers/SamplesCategories'
import samplesConfig from 'config/samples'

const PlayerContext = React.createContext({})

const PlayerContextProvider = ({ children }) => {
  const [samples, setSamples] = useState(samplesConfig)
  const [categories, setCategories] = useState(categoriesConfig)

  const [bufferLength, setBufferLength] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  const [currentSample, setCurrentSample] = useState(samples[0])
  const [filteredSamples, setFilteredSamples] = useState(samples)
  const [isLooping, setIsLooping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [visData, setVisData] = useState(null)

  useEffect(() => {
    let filteredSamplesForCategory = getSamplesForCategory(currentCategory)
    setFilteredSamples(filteredSamplesForCategory)
  }, [currentCategory])

  useEffect(() => {
    setCurrentSample(filteredSamples[0])
  }, [filteredSamples])

  useEffect(() => {
    setIsPlaying(false)
  }, [currentSample])

  const contextValue = {
    bufferLength,
    categories,
    currentCategory,
    currentSample,
    filteredSamples,
    isLooping,
    isPlaying,
    samples,
    setBufferLength,
    setCategories,
    setCurrentCategory,
    setCurrentSample,
    setFilteredSamples,
    setIsLooping,
    setIsPlaying,
    setSamples,
    setVisData,
    visData,
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  )
}

PlayerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PlayerContext
export { PlayerContextProvider }

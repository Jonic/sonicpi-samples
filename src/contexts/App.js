import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { trackPageView } from '../helpers/Analytics'

const AppContext = React.createContext({
  isLoading: true,
  setIsLoading: () => {},
})

const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [visData, setVisData] = useState(new Uint8Array())

  useEffect(() => trackPageView(), [])

  const contextValue = {
    isLoading,
    setIsLoading,
    setVisData,
    visData,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContext
export { AppContextProvider }

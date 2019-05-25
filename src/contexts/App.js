import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { trackPageView } from '../helpers/Analytics'

const AppContext = React.createContext({
  isLoading: true,
  setIsLoading: () => {},
})

const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => trackPageView(), [])

  const contextValue = {
    isLoading,
    setIsLoading,
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

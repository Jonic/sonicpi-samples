import './App.scss'

import AppContext, { AppContextProvider } from 'contexts/App'
import React, { useContext } from 'react'

import Player from './Player/Player'
import classnames from 'classnames'

const App = () => {
  const { isLoading } = useContext(AppContext)
  const cAppClassNames = classnames(['c-app', isLoading && 'c-app--is-loading'])

  return (
    <AppContextProvider>
      <main className={cAppClassNames}>
        <h1 className="c-app__title">Sonic Pi Samples</h1>

        <section className="c-app__player">
          <Player />
        </section>
      </main>
    </AppContextProvider>
  )
}

export default App

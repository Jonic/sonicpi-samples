import React, { Component } from 'react'
import Player from './Player/Player'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
    }
  }

  toggleIsLoading = () => {
    let newState = !this.state.isLoading
    this.updateIsLoading(newState)
  }

  updateIsLoading = (newState) => {
    this.setState({
      isLoading: newState,
    })
  }

  render() {
    return (
      <div className="c-App">
        <h1 className="c-App__title">
          Sonic Pi Samples
        </h1>

        <Player
          isLoading={this.state.isLoading}
          toggleIsLoading={this.toggleIsLoading}
          updateIsLoading={this.updateIsLoading}
        />
      </div>
    )
  }
}

export default App

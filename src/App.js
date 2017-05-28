import React, { Component } from 'react'
import Player from './components/Player/Player'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
    }
  }

  updateIsLoading = (newState) => {
    this.setState({
      isLoading: newState,
    })
  }

  render() {
    return (
      <Player
        isLoading={this.state.isLoading}
        updateIsLoading={this.updateIsLoading}
      />
    )
  }
}

export default App

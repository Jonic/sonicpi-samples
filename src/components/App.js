import React, { Component } from 'react'
import Player from './Player/Player'

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
    return <Player
      isLoading={this.state.isLoading}
      toggleIsLoading={this.toggleIsLoading}
      updateIsLoading={this.updateIsLoading}
    />
  }
}

export default App

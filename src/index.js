import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { trackPageView } from './helpers/Analytics'

ReactDOM.render(<App />, document.getElementById('react-root'), trackPageView())
registerServiceWorker()

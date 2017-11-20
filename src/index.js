import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { init as AnalyticsInit } from './helpers/Analytics'

import './application.css'

ReactDOM.render(<App />, document.getElementById('react-root'), AnalyticsInit())
registerServiceWorker()

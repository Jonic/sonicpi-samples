import './application.scss'

import * as serviceWorker from './serviceWorker'

import { init as AnalyticsInit } from './helpers/Analytics'
import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'), AnalyticsInit())
serviceWorker.register()

import ReactGA from 'react-ga'

import config from '../_config/analytics'

ReactGA.initialize(config.id)

const trackPageView = () => {
  console.log('trackPageView') // eslint-disable-line no-console

  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const trackPlay = sample => {
  const event = {
    category: 'Audio',
    action:   'Sample Played',
    label:    sample,
  }

  console.log('trackPlay', event) // eslint-disable-line no-console

  ReactGA.event(event)
}

export { trackPageView, trackPlay }

import ReactGA from 'react-ga'
import config from 'config/analytics'

const init = () => {
  console.log('Analytics#init') // eslint-disable-line no-console

  ReactGA.initialize(config.id)
}

const trackPageView = () => {
  console.log('Analytics#trackPageView') // eslint-disable-line no-console

  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const trackPlay = sample => {
  const event = {
    category: 'Audio',
    action: 'Sample Played',
    label: sample,
  }

  console.log('Analytics#trackPlay', event) // eslint-disable-line no-console

  ReactGA.event(event)
}

export { init, trackPageView, trackPlay }

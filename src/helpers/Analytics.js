import ReactGA from 'react-ga'

ReactGA.initialize('UA-85981-10')

const trackPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const trackPlay = sample => {
  ReactGA.event({
    category: 'Audio',
    action:   'Sample Played',
    label:    sample,
  })
}

export { trackPageView, trackPlay }

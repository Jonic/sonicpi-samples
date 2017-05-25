import ReactGA from 'react-ga'

ReactGA.initialize()

const trackPageView = () => {
  console.log('trackPageView')
}

const trackPlay = (sample) => {
  console.log('trackPlay')
}

export {
  trackPageView,
  trackPlay,
}

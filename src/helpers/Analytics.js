import ReactGA from 'react-ga'

ReactGA.initialize()

const trackPageView = () => {
  console.log('trackPageView')
}

const trackPlay = () => {
  console.log('trackPlay')
}

const trackPlayBySample = (sample) => {
  console.log('trackPlayBySample')
}

export {
  trackPageView,
  trackPlay,
  trackPlayBySample,
}

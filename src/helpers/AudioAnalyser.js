let analyser
let frequencyData

export const AudioAnalyserHelperInit = (audioElement, setVisData) => {
  let context

  try {
    context = new window.AudioContext()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('No Web Audio API support')
    return
  }

  const elementSource = context.createMediaElementSource(audioElement)

  analyser = context.createAnalyser()
  analyser.fftSize = 128

  elementSource.connect(analyser)
  elementSource.connect(context.destination)

  window.requestAnimationFrame(() => {
    AudioAnalyserHelperSendData(setVisData)
  })
}

export const AudioAnalyserHelperSendData = setVisData => {
  window.requestAnimationFrame(() => {
    AudioAnalyserHelperSendData(setVisData)
  })

  frequencyData = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(frequencyData)
  setVisData(frequencyData)
}

const AudioAnalyserHelper = {
  AudioAnalyserHelperInit,
  AudioAnalyserHelperSendData,
}

export default AudioAnalyserHelper

let analyser
let frequencyData

export const AudioAnalyserCreateContext = () => {
  let context

  try {
    context = new window.AudioContext()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('No Web Audio API support')
    return null
  }

  return context
}

export const AudioAnalyserHelperInit = (
  audioContext,
  audioElement,
  setVisData,
) => {
  if (!audioContext) {
    return
  }

  const elementSource = audioContext.createMediaElementSource(audioElement)

  analyser = audioContext.createAnalyser()
  analyser.fftSize = 128

  elementSource.connect(analyser)
  elementSource.connect(audioContext.destination)

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
  AudioAnalyserCreateContext,
  AudioAnalyserHelperInit,
  AudioAnalyserHelperSendData,
}

export default AudioAnalyserHelper

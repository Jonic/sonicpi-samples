const [elementSource, setElementSource] = useState(null)

let bufferLength
let context
let frequencyData

try {
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  context = new window.AudioContext()
} catch (e) {
  console.log('No Web Audio API support') // eslint-disable-line no-console
}

useEffect(() => {
  setElementSource(context.createMediaElementSource(audioElement))
}, [audioElement, context])

useEffect(() => {
  setAnalyser(elementSource.createAnalyser())
  elementSource.connect(analyser)
  elementSource.connect(context.destination)
}, [context.destination, elementSource])

useEffect(() => {
  analyser.fftSize = 128
  let bufferLength = analyser.frequencyBinCount
  let frequencyData = new Uint8Array(bufferLength)

  setBufferLength(bufferLength)

  window.requestAnimationFrame(renderVisualiserFrame)
}, [renderVisualiserFrame, setBufferLength])

const renderVisualiserFrame = useCallback(() => {
  window.requestAnimationFrame(renderVisualiserFrame)
  analyser.getByteFrequencyData(frequencyData)
  setVisData(frequencyData)
})

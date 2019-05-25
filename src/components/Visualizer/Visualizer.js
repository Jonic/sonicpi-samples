/* eslint-disable no-magic-numbers */
import './Visualizer.scss'

import React, { useContext, useEffect, useRef, useState } from 'react'

import AppContext from 'contexts/App'

const Visualizer = () => {
  const canvas = useRef(null)
  const [context, setContext] = useState(null)

  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const { visData } = useContext(AppContext)

  useEffect(() => {
    setContext(canvas.current.getContext('2d'))
  }, [canvas])

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()
  })

  const updateWindowDimensions = () => {
    setCanvasHeight(window.innerHeight)
    setCanvasWidth(window.innerWidth)
  }

  useEffect(() => {
    canvas.current.width = canvasWidth

    let barWidth = (canvasWidth / visData.length) * 2
    let barHeight
    let colorOpacity
    let maxValue = 255
    let x = 0

    for (let value of visData) {
      barHeight = canvasHeight / (maxValue / value)
      colorOpacity = (1 - 100 / barHeight) / 1.5
      context.fillStyle = `rgba(255, 255, 255, ${colorOpacity})`
      context.fillRect(x, canvasHeight - barHeight, barWidth, barHeight)
      x += barWidth
    }
  }, [canvasHeight, canvasWidth, context, visData])

  return (
    <canvas
      className="c-visualizer"
      height={canvasHeight}
      ref={canvas}
      style={{
        height: canvasHeight,
        width: canvasWidth,
      }}
      width={canvasWidth}
    />
  )
}

export default Visualizer

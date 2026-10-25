// main page, controls which screen to show
import { useState } from 'react'
import WelcomeScreen from './views/WelcomeScreen'
import FrameSelector from './views/FrameSelector'
import CameraView from './views/CameraView'
import './App.css'

export default function App() {
  var [screen, setScreen] = useState('welcome')
  var [frame, setFrame] = useState(null)
  var [photo, setPhoto] = useState(null)

  function handleStart() {
    setScreen('frames')
  }

  function handleFrameSelect(selectedFrame) {
    setFrame(selectedFrame)
    setScreen('camera')
  }

  function handleCapture(photoData) {
    setPhoto(photoData)
    setScreen('preview')
  }

  function handleRetake() {
    setPhoto(null)
    setScreen('camera')
  }

  function handleDone() {
    setPhoto(null)
    setFrame(null)
    setScreen('welcome')
  }

  if (screen === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />
  }

  if (screen === 'frames') {
    return <FrameSelector onSelect={handleFrameSelect} />
  }

  if (screen === 'camera') {
    return <CameraView frame={frame} onCapture={handleCapture} />
  }

  if (screen === 'preview') {
    return (
      <div className="preview-screen">
        <div className="preview-frame">
          <img src={frame.image} className="preview-frameimg" />
          <img src={photo} className="preview-photo" />
        </div>
        <div className="preview-buttons">
          <button className="retakebutton" onClick={handleRetake}>Retake</button>
          <button className="donebutton" onClick={handleDone}>Done</button>
        </div>
      </div>
    )
  }
}

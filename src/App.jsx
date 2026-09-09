// main page
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Digital Selfie Station</h1>
        <p className="subtitle">USACE - Tulsa District</p>
      </header>

      <main className="screen welcome">
        <p className="welcome-text">Take a photo with a themed frame and share your visit with USACE!</p>
        <div className="photo-area">Photo Area!</div>
      </main>
    </div>
  )
}
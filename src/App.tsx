import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import reactLogo from './assets/react.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    
    </div>
  )
}

export default App

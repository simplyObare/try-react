import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App

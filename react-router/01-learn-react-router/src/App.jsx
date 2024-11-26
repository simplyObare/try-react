import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import OrderSummary from './components/OrderSummary'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard name="Obare" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  )
}

export default App

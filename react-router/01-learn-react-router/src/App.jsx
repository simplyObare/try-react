import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import PageNotFound from './components/PageNotFound'
import OrderSummary from './components/OrderSummary'
import Login from './components/Login'
import Products from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts'
import TrendingProducts from './components/TrendingProducts'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="products">Products</NavLink>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </nav>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard name="Obare" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="trending" elements={<TrendingProducts />} />
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  )
}

export default App

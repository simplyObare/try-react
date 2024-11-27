import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search" name="" id="" />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="featured">Featured</Link>
        <Link to="trending">Trending</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Products

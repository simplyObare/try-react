import { Link } from 'react-router-dom'
import cartIcon from '../assets/images/iconCart.png'

export const Header = () => {
  return (
    <header className="flex items-center justify-between mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home.
      </Link>
      <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center relative cursor-pointer">
        <img src={cartIcon} alt="" className="w-6" />
        <span className="flex items-center justify-center absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full">
          0
        </span>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import cartIcon from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/Cart'
import PropTypes from 'prop-types'

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items)
  const { id, name, price, image, slug } = props.data
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    )
  }
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
        />
      </Link>
      <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={cartIcon} alt="" className="w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  )
}

ProductCart.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCart

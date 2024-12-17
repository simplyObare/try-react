import ProductCart from '../components/ProductCart'
import { products } from '../data/products'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">Product List</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => (
          <ProductCart data={product} key={key} />
        ))}
      </div>
    </div>
  )
}
export default HomePage

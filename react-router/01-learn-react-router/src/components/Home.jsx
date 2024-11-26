import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('/order-summary', { replace: true })}>
        Buy Now
      </button>
    </>
  )
}

export default Home

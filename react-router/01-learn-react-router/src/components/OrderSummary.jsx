import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Order Confirmed: Thanks for your order</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary

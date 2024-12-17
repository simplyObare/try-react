import { Outlet } from 'react-router-dom'
import CartTabs from './CartTabs'
import { Header } from './Header'

const Layout = () => {
  return (
    <div className="bg-zinc-200">
      <main className="w-[1200] max-w-full m-auto p-5">
        <Header />
        <Outlet />
      </main>
      <CartTabs />
    </div>
  )
}
export default Layout

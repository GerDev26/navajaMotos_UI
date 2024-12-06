import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/organisms/Navbar'

export function NavigationLayout () {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

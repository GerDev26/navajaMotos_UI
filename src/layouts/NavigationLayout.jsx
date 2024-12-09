import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/organisms/Navbar'
import { NavigationGrid } from '../components/molecules/NavigationGrid'

export function NavigationLayout () {
  return (
    <NavigationGrid
      navbar={<Navbar />}
      content={<Outlet />}
    />
  )
}

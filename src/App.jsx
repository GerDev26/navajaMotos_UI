import { Route, Routes } from 'react-router-dom'
import { routeEnums } from './enums/routeEnums'
import { NavigationLayout } from './layouts/NavigationLayout'
import { Users } from './pages/Users'
import { Motobikes } from './pages/Motobikes'
import { Invoices } from './pages/Invoices'

function App () {
  return (
    <>
      <Routes>
        <Route element={<NavigationLayout />}>
          <Route
            element={<Motobikes />}
            path={routeEnums.MOTOBIKES}
          />
          <Route
            element={<Users />}
            path={routeEnums.USERS}
          />
          <Route
            element={<Invoices />}
            path={routeEnums.INVOICES}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App

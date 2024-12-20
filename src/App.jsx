import { Route, Routes } from 'react-router-dom'
import { routeEnums } from './enums/routeEnums'
import { NavigationLayout } from './layouts/NavigationLayout'
import { Users } from './pages/admin/Users'
import { Motobikes } from './pages/admin/Motobikes'
import { Invoices } from './pages/admin/Invoices'
import { MotobikePreview } from './pages/admin/MotobikePreview'

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
            element={<MotobikePreview />}
            path={routeEnums.MOTOBIKES_PREVIEW}
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

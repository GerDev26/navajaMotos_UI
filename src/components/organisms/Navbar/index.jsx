import { Link, useLocation } from 'react-router-dom'
import { InvoiceIcon } from '../../../assets/icons/InvoiceIcon'
import { MotobikeIcon } from '../../../assets/icons/MotobikeIcon'
import { UserIcon } from '../../../assets/icons/UserIcon'
import './navbar.css'
import { routeEnums } from '../../../enums/routeEnums'
import { firstLetterMayus } from '../../../helpers/stringHelpers'
import React from 'react'
import PropTypes from 'prop-types'

export function Navbar () {
  return (
    <nav className='navbar'>
      <ul className='navbar__menu'>
        <li>
          <NavItem
            icon={<MotobikeIcon />}
            to={routeEnums.MOTOBIKES}
            size='24px'
            color='#02b86e'
          />

        </li>
        <li>
          <NavItem
            icon={<UserIcon />}
            to={routeEnums.USERS}
            size='24px'
            color='#02b86e'
          />
        </li>
        <li>
          <NavItem
            icon={<InvoiceIcon />}
            to={routeEnums.INVOICES}
            size='24px'
            color='#02b86e'
          />
        </li>
      </ul>
    </nav>
  )
}

export function NavItem ({ to, icon, size, color }) {
  const path = useLocation()

  const isActive = path.pathname === `/${to}`
  const isItemActive = isActive ? 'nav-item nav-item--active' : 'nav-item'

  return (
    <Link to={`/${to}`} className={isItemActive}>
      <div>
        {React.cloneElement(icon, { fill: isActive, size, color })}
      </div>
      <small>{firstLetterMayus(to)}</small>
    </Link>
  )
}
NavItem.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  to: PropTypes.string
}

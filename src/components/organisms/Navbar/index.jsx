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
    <header className='navbar'>
      <nav className='navbar__menu'>
        <NavItem
          icon={<MotobikeIcon />}
          to={routeEnums.MOTOBIKES}
          size='28px'
          color='white'
        />
        <NavItem
          icon={<UserIcon />}
          to={routeEnums.USERS}
          size='28px'
          color='white'
        />
        <NavItem
          icon={<InvoiceIcon />}
          to={routeEnums.INVOICES}
          size='28px'
          color='white'
        />
      </nav>
    </header>
  )
}

export function NavItem ({ to, icon, size, color }) {
  const path = useLocation()
  const isActive = path.pathname === `/${to}`

  const activeStyle = isActive ? 'nav-item__active-background' : ''

  return (
    <Link to={to} className='nav-item'>
      <div className={activeStyle} />
      {React.cloneElement(icon, { fill: isActive, size, color })}
      <small style={{ marginTop: '8px' }}>{firstLetterMayus(to)}</small>
    </Link>
  )
}
NavItem.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  to: PropTypes.string
}

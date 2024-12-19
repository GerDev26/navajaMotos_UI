import { Link, useLocation } from 'react-router-dom'
import { InvoiceIcon } from '../../../assets/icons/InvoiceIcon'
import { MotobikeIcon } from '../../../assets/icons/MotobikeIcon'
import { UserIcon } from '../../../assets/icons/UserIcon'
import './navbar.css'
import { routeEnums } from '../../../enums/routeEnums'
import { firstLetterMayus } from '../../../helpers/stringHelpers'
import PropTypes from 'prop-types'

export function Navbar () {
  return (
    <nav className='navbar'>
      <ul className='navbar__menu'>
        <NavItem
          icon='motobike'
          to={routeEnums.MOTOBIKES}
        />
        <NavItem
          icon='user'
          to={routeEnums.USERS}
        />
        <NavItem
          icon='invoice'
          to={routeEnums.INVOICES}
        />
      </ul>
    </nav>
  )
}

export function NavItem ({ to, icon }) {
  const path = useLocation()

  const isActive = path.pathname === `/${to}`
  const iconBackground = isActive ? 'navbar__menu__item__icon--active' : ''
  const fontStyle = isActive ? { fontWeight: 500 } : { fontWeight: 300 }

  const iconComponent = {
    user: <UserIcon color='#02b86e' size='24px' fill={isActive} />,
    motobike: <MotobikeIcon color='#02b86e' size='24px' fill={isActive} />,
    invoice: <InvoiceIcon color='#02b86e' size='24px' fill={isActive} />
  }

  return (
    <li>
      <Link to={`/${to}`} className='navbar__menu__item'>
        <div className={`navbar__menu__item__icon ${iconBackground}`}>
          {iconComponent[icon]}
        </div>
        <small style={fontStyle}>{firstLetterMayus(to)}</small>
      </Link>
    </li>
  )
}
NavItem.propTypes = {
  icon: PropTypes.oneOf(['user', 'motobike', 'invoice']),
  to: PropTypes.string
}

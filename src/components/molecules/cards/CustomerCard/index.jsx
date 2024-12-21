import './styles.css'
import PropTypes from 'prop-types'

export function CustomerCard ({ name, username, domain }) {
  return (
    <article className='customer-card'>
      <div>
        <h5 className='customer-card__name'>{name}</h5>
        <h5 className='customer-card__username'>{username}</h5>
      </div>
      <div>
        <h5 className='customer-card__domain'>{domain}</h5>
      </div>
    </article>
  )
}

CustomerCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  domain: PropTypes.string
}

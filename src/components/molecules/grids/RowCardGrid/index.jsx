import './styles.css'
import PropTypes from 'prop-types'

export function RowCardGrid ({ children }) {
  return (
    <section className='row-card-grid'>
      {children}
    </section>
  )
}

RowCardGrid.propTypes = {
  children: PropTypes.node
}

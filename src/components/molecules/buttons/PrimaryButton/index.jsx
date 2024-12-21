import PropTypes from 'prop-types'
import './styles.css'

export function PrimaryButton ({ children, ...props }) {
  return (
    <button className='primary-button' {...props}>
      <h5>{children}</h5>
    </button>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node
}

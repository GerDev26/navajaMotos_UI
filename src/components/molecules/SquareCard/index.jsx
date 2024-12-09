import './squareCard.css'
import PropTypes from 'prop-types'

export function SquareCard ({ text }) {
  return (
    <article className='square-card'>
      <h3>{text}</h3>
    </article>
  )
}

SquareCard.propTypes = {
  text: PropTypes.string
}

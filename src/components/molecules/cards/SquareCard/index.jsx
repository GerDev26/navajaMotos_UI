import { Link } from 'react-router-dom'
import './styles.css'
import PropTypes from 'prop-types'

export function SquareCard ({ text = '' }) {
  return (
    <Link to={`${text.replace(/ /g, '-')}`}>
      <article className='square-card'>
        <h4>{text}</h4>
      </article>
    </Link>
  )
}

export function SquareCardLoading ({ quantity = 1 }) {
  const cards = Array(quantity).fill()
  return (
    <>
      {
      cards.map((c, index) => (
        <article key={index} className='square-card skeleton' />
      ))
    }
    </>
  )
}

SquareCard.propTypes = {
  text: PropTypes.string
}
SquareCardLoading.propTypes = {
  quantity: PropTypes.number
}

import { Link } from 'react-router-dom'
import './squareCard.css'
import PropTypes from 'prop-types'
import { routeEnums } from '../../../enums/routeEnums'

export function SquareCard ({ text }) {
  return (
    <Link to={`${text.replace(/ /g, '-')}`} className='square-card'>
      <article>
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

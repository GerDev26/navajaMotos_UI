import PropTypes from 'prop-types'
import './squareCardsGrid.css'

export function SquareCardsGridLoader () {
  return (
    <section className='square-cards-grid'>
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
      <article className='square-cards-grid__charge-card skeleton' />
    </section>
  )
}

export function SquareCardsGrid ({ children }) {
  return (
    <section className='square-cards-grid'>
      {children}
    </section>
  )
}

SquareCardsGrid.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node
}

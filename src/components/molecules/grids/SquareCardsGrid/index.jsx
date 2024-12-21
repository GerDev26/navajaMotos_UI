import PropTypes from 'prop-types'
import './styles.css'
import { SquareCardLoading } from '../../cards/SquareCard'

export function SquareCardsGrid ({ children, loading, infinityScrollObserver }) {
  const renderContent = () => {
    if (children.length > 0) {
      return children
    }
    return loading ? '' : <h1>No se encontraron resultados</h1>
  }
  return (
    <section className='square-cards-grid'>
      {renderContent()}
      {loading ? <SquareCardLoading quantity={20} /> : ''}
      <div ref={infinityScrollObserver} />
    </section>
  )
}

SquareCardsGrid.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  infinityScrollObserver: PropTypes.func
}

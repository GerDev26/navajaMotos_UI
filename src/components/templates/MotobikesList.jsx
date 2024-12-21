import { useSearchModels } from '../../hooks/useModels'
import { SquareCard } from '../molecules/cards/SquareCard'
import { SquareCardsGrid } from '../molecules/grids/SquareCardsGrid'
import PropTypes from 'prop-types'

export function MotobikesList ({ search }) {
  const { loading, models, ref } = useSearchModels({ search })

  return (
    <SquareCardsGrid loading={loading} infinityScrollObserver={ref}>
      {
        models
          ? models.map(d => (
            <SquareCard key={d.id} text={d.description} />
          ))
          : null
      }
    </SquareCardsGrid>
  )
}

MotobikesList.propTypes = {
  search: PropTypes.string
}

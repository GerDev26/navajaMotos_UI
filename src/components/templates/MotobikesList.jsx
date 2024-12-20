import { useModels } from '../../hooks/useModels'
import { SquareCard } from '../molecules/SquareCard'
import { SquareCardsGrid } from '../molecules/grids/SquareCardsGrid'
import { useLocation } from 'react-router-dom'

export function MotobikesList () {
  const location = useLocation()
  const search = new URLSearchParams(location.search).get('model') || ''
  const { ref, loading, models } = useModels({ search })

  return (
    <>
      <form>
        <input name='model' type='text' />
      </form>
      <SquareCardsGrid loading={loading} infinityScrollObserver={ref}>
        {
          models
            ? models.map(d => (
              <SquareCard key={d.id} text={d.description} />
            ))
            : null
        }
      </SquareCardsGrid>
    </>
  )
}

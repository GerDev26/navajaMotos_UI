import { MODELS } from '../../API/myAPI'
import { useFetch } from '../../hooks/useFetch'
import { SquareCard } from '../molecules/SquareCard'
import { SquareCardsGrid, SquareCardsGridLoader } from '../molecules/SquareCardsGrid'

export function MotobikesList () {
  const { data, loading } = useFetch({
    endpoint: MODELS
  })

  if (loading) {
    return <SquareCardsGridLoader />
  }

  return (
    <SquareCardsGrid>
      {data.data.map(d => (
        <SquareCard key={d.id} text={d.description} />
      ))}
    </SquareCardsGrid>
  )
}

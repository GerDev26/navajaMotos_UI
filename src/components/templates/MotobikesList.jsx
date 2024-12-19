import { useState } from 'react'
import { useModels } from '../../hooks/useModels'
import { SquareCardLoading, SquareCard } from '../molecules/SquareCard'
import { SquareCardsGrid } from '../molecules/grids/SquareCardsGrid'

export function MotobikesList () {
  const [search, setSearch] = useState('')
  const { ref, loading, motobikes } = useModels({ queryParams: `description[like]=${search}` })
  return (
    <>
      <input
        type='text'
        onChange={() => setSearch(event.target.value)}
      />
      <SquareCardsGrid>
        {motobikes.map(d => (
          <SquareCard key={d.id} text={d.description} />
        ))}
        {loading ? <SquareCardLoading quantity={40} /> : null}
        <div ref={ref} />
      </SquareCardsGrid>
    </>
  )
}

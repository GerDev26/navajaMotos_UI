import { CustomerCard } from '../molecules/cards/CustomerCard'
import { RowCardGrid } from '../molecules/grids/RowCardGrid'
import PropTypes from 'prop-types'

export function CustomersList ({ propietaries }) {
  return (
    <RowCardGrid>
      {
        propietaries.map(p => (
          <CustomerCard key={p.id} name={p.name} username={p.username} domain={p.domain} />
        ))
      }
    </RowCardGrid>
  )
}

CustomersList.propTypes = {
  propietaries: PropTypes.array
}

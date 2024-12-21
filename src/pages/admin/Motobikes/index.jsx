import { useState } from 'react'
import { MotobikesList } from '../../../components/templates/MotobikesList'
import { SearchBarWithButton } from '../../../components/organisms/SearchBarWithButton'
import { InputModel } from '../../../components/molecules/inputs/InputModel'

export function Motobikes () {
  const [search, setSearch] = useState('')

  const inputStyle = {
    position: 'sticky',
    top: 0,
    marginBlock: 'var(--spacing-4)'
  }

  return (
    <>
      <h1 style={{ marginBottom: '10px' }}>Motobikes</h1>
      <div
        style={inputStyle}
      >
        <InputModel
          onChange={() => setSearch(event.target.value)}
          placeholder='Boxer 150, NS 200, XR 150...'
        />

      </div>
      <MotobikesList search={search} />
    </>
  )
}

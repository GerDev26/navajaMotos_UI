import { PrimaryButton } from '../../molecules/buttons/PrimaryButton'
import { InputModel } from '../../molecules/inputs/InputModel'
import PropTypes from 'prop-types'
import './styles.css'

export function SearchBarWithButton ({ callback }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    callback(formData.get('model'))
  }
  return (
    <form onSubmit={handleSubmit} className='search-bar-with-button'>
      <InputModel name='model' />
      <PrimaryButton>Buscar</PrimaryButton>
    </form>
  )
}

SearchBarWithButton.propTypes = {
  callback: PropTypes.func
}

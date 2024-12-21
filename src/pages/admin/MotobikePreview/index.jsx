import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { MODELS_ENDPOINT } from '../../../API/myAPI'
import motobikes from '../../../mocks/modelPreview.json'
import { CustomersList } from '../../../components/templates/CustomersList'

export const MotobikePreview = () => {
  const { model } = useParams()

  const formatedModel = model.replace(/-/g, ' ')

  const { loading, data } = useFetch({ endpoint: `${MODELS_ENDPOINT}?description[eq]=${formatedModel}` })

  if (loading) return <p>Loading...</p>
  console.log(data)
  return (
    <section>
      <h1>{motobikes.description}</h1>
      <input type='text' />
      <CustomersList
        key={motobikes.id}
        propietaries={motobikes.propietaries}
      />
    </section>
  )
}

import { useParams } from 'react-router-dom'

export const MotobikePreview = () => {
  const { model } = useParams()
  return (
    <div>
      <h1>Preview de {model.replace(/-/g, ' ')}</h1>
    </div>
  )
}

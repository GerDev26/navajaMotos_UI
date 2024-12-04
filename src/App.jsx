import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {

  const {data, loading} = useFetch({
    endpoint: 'http://127.0.0.1:8000/vehicle/model'
  })

  if(loading){
    return 'Cargando'
  }

  return (
    <>
      {
        data.data.map(d => (
          <p key={d.id}>{d.description}</p>
        ))
      }
    </>
  )
}

export default App

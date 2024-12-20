import { useEffect, useState } from 'react'

const initialState = {
  endpoint: '',
  headers: {},
  method: 'GET'
}

export function useFetch ({ endpoint, headers, method } = initialState) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      method
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
        setError(true)
      })
  }, [endpoint])
  return { data, loading, error }
}

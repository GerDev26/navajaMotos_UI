import { useEffect, useState } from 'react'

const initialState = {
  endpoint: '',
  headers: {},
  queryParams: ''
}

export function useFetch ({ endpoint, headers, queryParams } = initialState) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const url = queryParams ? `${endpoint}?${queryParams}` : endpoint
    console.log(url)
    setLoading(true)
    fetch(url, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
        setError(true)
      })
  }, [queryParams, endpoint])
  return { data, loading, error }
}

import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { MODELS } from '../API/myAPI'
import { useFetch } from './useFetch'

export const useModels = ({ queryParams = '' }) => {
  const [ref, entry] = useIntersectionObserver()
  const [url, setUrl] = useState(MODELS)
  const [motobikes, setMotobikes] = useState([])

  const { data, loading, error } = useFetch({
    endpoint: url
  })

  useEffect(() => {
    if (data) {
      if (entry?.isIntersecting === true && data?.next_page_url) {
        setUrl(data.next_page_url)
        setMotobikes((prevState) => [...prevState, ...data.data])
        console.log('hola')
      }
    }
  }, [entry?.isIntersecting, queryParams])

  return { ref, motobikes, loading, error }
}

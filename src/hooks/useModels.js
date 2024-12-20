import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { MODELS_ENDPOINT } from '../API/myAPI'
import { useFetch } from './useFetch'

export const useModels = ({ search = '' }) => {
  const [ref, entry] = useIntersectionObserver()
  const [url, setUrl] = useState(`${MODELS_ENDPOINT}?description[like]=${search}`)
  const [models, setModels] = useState([])

  const { data, loading, error } = useFetch({
    endpoint: url
  })

  useEffect(() => {
    if (data) {
      if (entry?.isIntersecting === true && data?.next_page_url) {
        setUrl(data.next_page_url)
        setModels((prevState) => [...prevState, ...data.data])
      }
      if (models.length === 0) {
        setModels(data.data)
      }
    }
  }, [entry?.isIntersecting])

  return { ref, models, loading, error }
}

import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { MODELS_ENDPOINT } from '../API/myAPI'

export function useSearchModels ({ search = '' }) {
  const [ref, entry] = useIntersectionObserver()
  const [models, setModels] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [nextPage, setNextPage] = useState('')

  const nextModels = () => {
    fetch(`${nextPage}&description[like]=${search}`)
      .then(res => res.json())
      .then(data => {
        setModels((prevState) => [...prevState, ...data.data])
        setNextPage(data?.next_page_url)
      })
  }

  useEffect(() => {
    setModels([])
    setError(false)
    setLoading(true)
    fetch(`${MODELS_ENDPOINT}?description[like]=${search}`)
      .then(res => res.json())
      .then(data => {
        setModels(data.data)
        setNextPage(data?.next_page_url)
        console.log(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [search])

  useEffect(() => {
    if (entry?.isIntersecting === true && nextPage) {
      nextModels()
    }
  }, [entry?.isIntersecting])
  return { models, error, loading, ref }
}

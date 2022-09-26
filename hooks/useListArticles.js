import { useEffect, useState } from 'react'
import { getListArticles } from 'services/fetchData'

export const useListArticles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getListArticles()
      .then(({ articles }) => setArticles(articles))
      .catch(error => console.error(error.mesages))
  }, [])

  return { articles }
}

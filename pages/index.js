import { ListArticles } from 'components/ListArticles'
import { NavLink } from 'components/NavLink'
import { PageLayout } from 'components/PageLayout'
import { Seo } from 'components/Seo'
import styles from '../styles/Home.module.css'

const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = '72e38bb459ce4c41aff6b56e589855b0'

const API_URL = `${BASE_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`

export default function Home({ articles }) {
  if (articles.length === 0) return <h1>No hay articulos para mostrar</h1>

  return (
    <PageLayout>
      <Seo
        title='NewsApp - Home'
        description='News App - the best app to read news'
      />
      <section className={styles.container}>
        <h1>Hola mundo</h1>
        <NavLink href='/about'>About</NavLink>
      </section>
      <ListArticles articles={articles} />
    </PageLayout>
  )
}

export const getServerSideProps = ({ res }) => {
  return fetch(API_URL)
    .then(apiResponse => {
      if (apiResponse.ok) {
        const articles = apiResponse.json()
        return {
          props: articles
        }
      }
      if (res) {
        res.writeHead(404).end
      }
    })
    .catch(error => {
      console.error('Error:', error.mesages)
      res.statusCode = 404
      return {
        props: {}
      }
    })
}

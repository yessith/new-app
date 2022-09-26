import { ArticleCard } from 'components/ArticleCard'

export const ListArticles = ({ articles }) => {
  return (
    <section>
      {articles.map(({ title, author, urlToImage }, index) => (
        <ArticleCard
          key={index}
          title={title}
          author={author}
          urlToImage={urlToImage}
        />
      ))}
    </section>
  )
}

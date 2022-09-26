import Image from 'next/image'

export const ArticleCard = ({ title, author, urlToImage }) => {
  return (
    <article>
      <h2>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h2>
      <p>{author}</p>
      <figure>
        {/* <Image src={urlToImage} alt='Landscape picture' width={500} height={500} /> */}
        <img src={urlToImage} alt='Image for the article' />
      </figure>
    </article>
  )
}

/**
 **<figure class="post-block__media"><img alt="Instagram logo reflected" sizes="(max-width: 1600px) 600px, 850px" src="https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1228781108.jpg?w=850&amp;h=492&amp;crop=1" srcset="https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1228781108.jpg?w=600&amp;h=347&amp;crop=1 600w, https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1228781108.jpg?w=850&amp;h=492&amp;crop=1 850w"></figure>
 */

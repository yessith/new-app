import Head from "next/head"
import Image from 'next/image'
export const Seo = ({title,description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

// import * as dotenv from 'dotenv'
// dotenv.config()

// const BASE_URL = process.env.BASE_URL
// const API_KEY = process.env.API_KEY

const  BASE_URL= 'https://newsapi.org/v2'
const  API_KEY= '72e38bb459ce4c41aff6b56e589855b0'

const API_URL = `${BASE_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`


export const getListArticles = async () => {
  const response = await fetch(API_URL)
  const data = response.json()
  return data
}

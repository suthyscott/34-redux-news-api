import React from 'react'
import { useSelector } from 'react-redux'
import { selectPotentials } from '../redux/potentialArticlesSlice'
import './Home.css'

const Home = () => {
  const potentialArticles = useSelector(selectPotentials)



  console.log(potentialArticles)

  const articlesDisplay = potentialArticles.map(article => {
    return article.urlToImage ? (
      <div className='article-container'>
        <h1>{article.title}</h1>
        <img src={article.urlToImage}/>
      </div>
    ) : null
  })
  return (
    <div>{articlesDisplay}</div>
  )
}

export default Home
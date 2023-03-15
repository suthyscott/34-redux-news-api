import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectPotentials } from '../redux/potentialArticlesSlice'
import { setDisplayArticle } from '../redux/displayArticleSlice'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const potentialArticles = useSelector(selectPotentials)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const selectArticleHandler = article => {
    dispatch(setDisplayArticle(article))
    navigate('/details')
  }

  console.log(potentialArticles)

  const articlesDisplay = potentialArticles.map(article => {
    return article.urlToImage ? (
      <div className='article-container'>
        <h1>{article.title}</h1>
        <img src={article.urlToImage}/>
        <button onClick={() => selectArticleHandler(article)}>See more</button>
      </div>
    ) : null
  })
  return (
    <div>{potentialArticles.length === 0 ? 'There are no reults for that search term' : articlesDisplay}</div>
  )
}

export default Home
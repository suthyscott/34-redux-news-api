import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/displayArticleSlice'

const Details = () => {
  const displayArticle = useSelector(selectDisplay)
  console.log(displayArticle)
  return (
    <div>Details
      <p>{displayArticle.title}</p>
      <img src={displayArticle.urlToImage}/>
      <a href={displayArticle.url} target="_blank">See full article</a>
    </div>
  )
}

export default Details
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/displayArticleSlice'

const Details = () => {
  const displayArticle = useSelector(selectDisplay)
  console.log(displayArticle)
  return (
    <div>Details
      <p>{displayArticle.title}</p>
    </div>
  )
}

export default Details
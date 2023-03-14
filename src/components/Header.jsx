import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { setPotentialArticles } from '../redux/potentialArticlesSlice'
import { useDispatch } from 'react-redux'

const {REACT_APP_API_KEY} = process.env

const Header = () => {
  const [input, setInput] = useState('')
  let dispatch = useDispatch()

  const handleSearch = e => {
    e.preventDefault()
    axios.get(`https://newsapi.org/v2/everything?apiKey=${REACT_APP_API_KEY}&q=${input}&language=en`)
      .then(res => {
        dispatch(setPotentialArticles(res.data.articles))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/details'>Details</NavLink>

        <form onSubmit={e => handleSearch(e)}>
          <input placeholder='Search the news for something!' onChange={e => setInput(e.target.value)}/>
          <button>Search</button>
        </form>
    </div>
  )
}

export default Header
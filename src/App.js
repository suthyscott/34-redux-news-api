import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;

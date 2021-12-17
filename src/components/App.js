import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../CSS/App.css'
import PageHome from './PageHome'
import PageFavorite from './PageFavorite'
import PageAbout from './PageAbout'
import PageIndividual from './PageIndividual'
import Footer from './Footer'

import { useDispatch } from "react-redux"
import { addLike, removeAll } from "../features/storage"


function App() {
  let arrayOfFavorites = []
  const dispatch = useDispatch();
// On homepage load, compare data between localstorage and local variable, if different, match it 
    for(let i=0; i<localStorage.length; i++){
        arrayOfFavorites.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(arrayOfFavorites)
    dispatch(removeAll())
    
    arrayOfFavorites.forEach(item => {
      dispatch(addLike({
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        releaseDate: item.release_date,
        rating: item.vote_average,
        overview: item.overview
  }))
    })
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Routes>
              <Route path="/" element={<PageHome sort='popular'/>} />
              <Route path='/sort/popular' element={<PageHome sort='popular'/>} />
              <Route path='/sort/top-rated' element={<PageHome sort='top_rated'/>} />
              <Route path='/sort/now-playing' element={<PageHome sort='now_playing'/>} />
              <Route path='/sort/upcoming' element={<PageHome sort='upcoming'/>} />
              <Route path="/favorite" element={<PageFavorite />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/individual/:id" element={<PageIndividual />} />
            </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

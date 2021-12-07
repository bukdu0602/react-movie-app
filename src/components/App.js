import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../CSS/App.css'
import PageHome from './PageHome'
import PageFavorite from './PageFavorite'
import PageAbout from './PageAbout'
import PageIndividual from './PageIndividual'
import Footer from './Footer'


function App() {
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

import React, {useState, useEffect} from "react";
import { API_TOKEN } from '../globals/globals';
import { Link, useNavigate } from 'react-router-dom';
import noPoster from "../images/no-movie-poster.jpg"


const PageHome = ({ sort }) => {
    
    const [moviesData, setMoviesData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                  }
            });
            const moviesData = await res.json();
            const first12Movies = moviesData.results.splice(0,12); 
            setMoviesData(first12Movies);
          }
      
          fetchMovies();

    }, [sort]);

    function gotClicked(e){
        e.preventDefault();
        const item = e.target.value
        navigate(item, { replace: true });
    }

    return (
        <section className="home-page">

            <label htmlFor="myList">Sort</label>
            <select id="myList" name="myList" onChange={gotClicked}>
                <option value="">Select</option>
                <option value="/sort/popular">Popular</option>
                <option value="/sort/top-rated">Top Rated</option>
                <option value="/sort/now-playing">Now Playing</option>
                <option value="/sort/upcoming">Upcoming</option>
            </select>
        
        
        <nav className="nav-sort">
          
        </nav>
        <div className="cards">
            {moviesData !== null && 
                moviesData.map((movie, idForCss) =>
                    <div className={`card id${idForCss}`} key={movie.id}>
                        <div className="posterImage">
                        {movie.poster_path !== null ?
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt=" " />:
                            <img src={noPoster} alt="NoImages"></img>
                        }
                        </div>
                        <div className="movieInfo">
                        <h3>{`Title: ${movie.title}`}</h3>
                        <p>{`Released date: ${movie.release_date}`}</p>
                        <p>{`Rating: ${movie.vote_average}`}</p>
                        {movie.overview.length > 80 ? <p>{movie.overview.substring(0, 80)} . . .</p> : <p>{movie.overview}</p>}
                        <Link to={`/individual/${movie.id}`}> More Info </Link>
                        </div>
                    </div>
                    
            )}
        </div>
        </section>
    )

};

export default PageHome;
import React, {useState, useEffect} from "react";
import { API_TOKEN } from '../globals/globals';
import { NavLink } from 'react-router-dom';

const PageHome = () => {
    
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
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

    }, []);

    return (
        <section className="home-page">
            {moviesData !== null && 
                moviesData.map(movie =>
                    <div className="card">
                        <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=" " />
                        </div>
                        <div className="movieInfo">
                        <h3>{`Title: ${movie.title}`}</h3>
                        <p>{`Released date: ${movie.release_date}`}</p>
                        <p>{`Rating: ${movie.vote_average}`}</p>
                        <p>{`Overview: ${movie.overview}`}</p>
                        <NavLink to={`/individual/${movie.title}`}> More Info </NavLink>
                        </div>
                    </div>
            )}
        </section>
    )

};

export default PageHome;
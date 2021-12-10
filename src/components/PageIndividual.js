import { useParams } from 'react-router-dom';

// const PageIndividual = () => {
//     let { id }  = useParams();
//     return (
//         <main>
//             <section>
//                 <h2>Detail Page</h2>
//                 <h2> {id} </h2>
//                 <p>Favorite ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
//             </section>
//         </main>
//     );

// };

// export default PageIndividual;


import React, {useState, useEffect} from "react";
import { API_TOKEN } from '../globals/globals';
import { NavLink } from 'react-router-dom';
import { API_KEY } from '../globals/globals'



const PageIndividual = () => {
    let { id }  = useParams();
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
            `, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                  }
            });
            const moviesData = await res.json();
            setMoviesData(moviesData);
          }
      
          fetchMovies();

    }, [id]);


    return (
        <section className="home-page">
                 <h2>Detail Page</h2>

            {moviesData !== null && 
                // moviesData.map(movie =>
                    <div className="card">
                        <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/w500/${moviesData.poster_path}`} alt=" " />
                        </div>
                        <div className="movieInfo">
                        <h3>{`Title: ${moviesData.title}`}</h3>
                        <p>{`Released date: ${moviesData.release_date}`}</p>
                        <p>{`Rating: ${moviesData.vote_average}`}</p>
                        <p>{`Overview: ${moviesData.overview}`}</p>
                        <NavLink to={`/individual/${moviesData.title}`}> More Info </NavLink>
                        </div>
                    </div>
            }
        </section>
    )

};

export default PageIndividual;
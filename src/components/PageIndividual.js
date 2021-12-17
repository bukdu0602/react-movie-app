import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { API_KEY } from '../globals/globals'
// import noMovie from "../images/no-movie-poster.jpg"

import { useSelector, useDispatch } from "react-redux"
import { addLike, removeLike } from "../features/storage"



const PageIndividual = () => {
    const likeArray = useSelector((state) => state.user.liked)
    const dispatch = useDispatch();
    let { id }  = useParams();
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const moviesData = await res.json();
            setMoviesData(moviesData);
          }
          fetchMovies();
    }, [id]);

    function inCart(movieID){
        
        for(let i=0; i < likeArray.length; i++){
            if (movieID === likeArray[i].id){
                return true
            }
        }
    }

    return (
        <div className="detail-page">
        
            {moviesData !== null  &&
                    <div className="detail">
                        <div className="posterImageDetail">
                        <img src={`https://image.tmdb.org/t/p/w500/${moviesData.poster_path}`} alt=" " />
                        
                        
                        {inCart(moviesData.id) ?
                            <button onClick={() => {
                                dispatch(removeLike({
                                    id: moviesData.id
                                }))
                            }}>Remove like</button>
                        :
                        <button onClick={() => {
                            dispatch(addLike({
                                id: moviesData.id,
                                title: moviesData.title,
                                poster_path: moviesData.poster_path,
                                releaseDate: moviesData.release_date,
                                rating: moviesData.vote_average,
                                overview: moviesData.overview
                            }))
                        }} className="favorite">Like</button>
                        }
                        </div>
                        <div className="movieInfoDetail">
                        
                        <h3>{`Title: ${moviesData.title}`}</h3>
                        <p>{`Released date: ${moviesData.release_date}`}</p>
                        <p>{`Rating: ${moviesData.vote_average}`}</p>
                        <p>{`Overview: ${moviesData.overview}`}</p>
                        
                        </div>
                    </div>
            }
        </div>
    )

};

export default PageIndividual;
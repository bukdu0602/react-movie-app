import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"



const PageFavorite = () => {

    const likeArray = useSelector((state) => state.user.liked)
    console.log(likeArray)

    if(likeArray === []){
        console.log("abcccccc")
    }
    return (
        <section className="home-page">
            {(likeArray.length !== 0) ?
                likeArray.map(movie =>
                    <div className="card" key={movie.id}>
                        <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt=" " />
                        </div>
                        <div className="movieInfo">
                        <h3>{`Title: ${movie.title}`}</h3>
                        <p>{`Released date: ${movie.release_date}`}</p>
                        <p>{`Rating: ${movie.vote_average}`}</p>
                        <p>{`Overview: ${movie.overview}`}</p>
                        <Link to={`/individual/${movie.id}`}> More Info </Link>
                        </div>
                    </div>)
            :
            <h1>Sorry you have no favourited movies. Return to the home page to add a favourite movie</h1>
            }
        </section>
    )

};

export default PageFavorite;
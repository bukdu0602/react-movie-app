import React from "react";
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux"



const PageFavorite = () => {

    // const likeArray = useSelector((state) => state.user.liked)

    let arrayOfFavorites = []

    for(let i=0; i<localStorage.length; i++){
        arrayOfFavorites.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(arrayOfFavorites)

    return (
        <section className="home-page">
        <div className="cards">
            {(arrayOfFavorites.length !== 0) ?
                arrayOfFavorites.map(movie =>
                
                    <div className="card" key={movie.id} >
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
            <div className="noFavMovie">
            <h1 >Sorry you have no favourited movies. Return to the home page to add a favourite movie</h1>
            </div>
            }
            </div>
        </section>
    )

};

export default PageFavorite;
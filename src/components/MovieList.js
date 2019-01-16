import React from 'react';
import MovieCard from './MovieCard.js'

const MovieList = (props) => {
    return ( 
        <div className="container">
            <h1>Movie List</h1>
            {props.movies.map((movie,index) => {
                return <MovieCard key={index} movie={movie}/>
            })}
        </div>
        )
}
   
   export default MovieList
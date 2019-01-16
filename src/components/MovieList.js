import React from 'react';
import MovieCard from './MovieCard.js'

const MovieList = (props) => {
    return ( 
        <div>
            <h1>Movie List</h1>
            {props.movies.map(movie => {
                return <MovieCard movie={movie}/>
            })}
        </div>
        )
}
   
   export default MovieList
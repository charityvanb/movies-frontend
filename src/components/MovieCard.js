import React from 'react';

const MovieCard = (props) => {
 return (
<div class="row align-items-center">
<div class="col">
 <h2>Movie Card</h2>
 <h3>{props.movie.title}</h3>
 <p>{props.movie.director}</p>
 <p>{props.movie.year}</p>
 <p>{props.movie.rating}</p>
 <button type="button" class="btn btn-primary">Edit</button>
 <button type="button" class="btn btn-secondary">Delete</button>
 </div>
 </div>
 )
}

export default MovieCard
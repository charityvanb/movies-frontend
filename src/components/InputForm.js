
import React from 'react';

const InputForm = () => {
    return (
        <div>
            <h1>Add a Movie</h1>
            <form>
                <h3>Movie</h3>
                <br/>
                <input type="text" name="movie name" />
                <br/>
                <h3>Director</h3>
                <br/>
                <input type="text" name="director's name" />
                <br/>
                <h3>Year</h3>
                <br/>
                <h3>Rating</h3>
                <input type="text" name="Year"></input>
                <br/>
                <h3>Poster URL</h3>
                <input type="text" name="URL"></input>
                <button type="button">Submit</button>
                
            </form>
        </div>
    )
   }
   
   export default InputForm
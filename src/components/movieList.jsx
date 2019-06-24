import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
    return (
        <div>
            {
                props.movies.map((ele) => {
                    return <MovieListEntry movie={ele} key={ele.title}/>
                })
            }
        </div>
    )
}

export default MovieList;
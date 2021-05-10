import React from 'react';

const Movie = ({url, children}) => {

    return(
        <>
        <p class="App"><a  href={url}>{children}</a></p>
        </>
    )
}


export default Movie;
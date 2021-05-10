import React from 'react';


const Button = ({url, title}) => {

    return (

        <>
        <p class="App"><a  href={url}>{title}</a></p>
        <p><a href={url}></a></p>
        </>
    )

};



export default Button;
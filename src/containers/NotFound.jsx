import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () =>(
    <>
    <h1>No encontrado</h1>
    <h2>No encontrado regresa al  
    <Link to="/">
        Home
    </Link>
    </h2>
    </>
);

// Otra forma
/*const NotFound = () =>(
    <>
	    <h1>No encontrado</h1>
    </>
);*/

export default NotFound;
import React from 'react'
import {Link} from 'react-router-dom';

function notFound() {
    return (
        <div>
            <h1>404 Page not found!...</h1>
            <h1>Welcome to the most wonderful page you will never found :)</h1>
            <Link to='./'><h3 className='tet'>Back to the Homepage!</h3></Link>
        </div>
    )
}

export default notFound
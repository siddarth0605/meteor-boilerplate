import React from 'react';
import {Link} from 'react-router-dom'

export default () => {
    return(
        <div>
            <div>
                <h1>Page Not Found</h1>
                <p>Hmm, we are unable to find that page</p>
                <Link to="/" replace>HEAD HOME</Link>
            </div>
        </div>
    )
}
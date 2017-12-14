import React from 'react';
import {Accounts} from 'meteor/accounts-base';


const PrivateHeader = (props) => {
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <button onClick={() => Accounts.logout()}>Logout</button>
            </div>
        </div>
    );
}

export default PrivateHeader;
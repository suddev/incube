import React from 'react';

import { ButtonStyles } from './Utility/ButtonStyles';
import logo from './Pictures/logo_logout.png';

const Profile = ({user, handleLogout}) => {

    return (
        <span style={{textAlign: 'center'}}>
            <h1>Welcome {user.name}</h1>
            <img alt='Profile' src={user.pic} style={{display: 'block', margin: 'auto'}} />
            <button onClick={handleLogout} style={Object.assign({}, ButtonStyles, {width: '110px', color: 'red'})}>
                <img style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
                <span style={{float: 'left', padding: '5px'}}>Signout</span>
            </button>
        </span>
    );
}

export default Profile;
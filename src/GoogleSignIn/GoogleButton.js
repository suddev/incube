import React from 'react';

import GoogleLogin from 'react-google-login';

import { ButtonStyles } from '../Utility/ButtonStyles';
import logo from '../Pictures/logo_google.png';

const GoogleButton = ({setIsUserSignedIn, setUser}) => {

    const handleSuccess = (response) => {
        console.log('Success')
        setUser({
            name: response.profileObj.name,
            email: response.profileObj.email,
            pic: response.profileObj.imageUrl,
            id: response.profileObj.googleId
        })
        setIsUserSignedIn('google');
    }

    return (
        <div style={{textAlign: 'center'}}>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={handleSuccess}
                render={renderProps => (
                    <button onClick={renderProps.onClick} style={ButtonStyles}>
                        <img style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
                        <span style={{float: 'left', padding: '5px'}}>Signup with Google</span>
                    </button>
                    )}
            />
        </div>
    );
}

export default GoogleButton;
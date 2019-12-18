import React, {useState } from 'react';
import SignIn from './SignIn';
import { ButtonStyles } from '../Utility/ButtonStyles';
import logo from '../Pictures/logo_email.png';
import Register from './Register';

const CustomSignInButton = ({isUserSignedIn, setIsUserSignedIn, setUser}) => {

    const [ route, setRoute ] = useState('signin');
    
    return (
        isUserSignedIn === 'none'
        ?   <div style={{textAlign: 'center'}}>
                <button id='button' style={ButtonStyles} onClick={() => setIsUserSignedIn('custom')}>
                    <img id='button_img' style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
                    <span id='button_text' style={{float: 'left', padding: '5px'}}>Signup with Email</span>
                </button>
            </div>
        :   route === 'register'
            ?   <Register setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} setRoute={setRoute} />
            :   <SignIn setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} setRoute={setRoute} />       
    )
}

export default CustomSignInButton;
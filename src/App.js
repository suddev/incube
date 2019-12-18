import React, { useState } from 'react';

import GoogleButton from './GoogleSignIn/GoogleButton';
import FacebookButton from './FacebookSignIn/FacebookButton';
import GithubButton from './GithubSignIn/GithubButton';
import LinkedInButton from './LinkedInSignIn/LinkedInButton';
import CustomSignInButton from './CustomSignIn/CustomSignInButton';
import MobileHandler from './Utility/MobileHandler';

const App = () => {
  const initialUserState = {
    name: '',
    email: '',
    pic: '',
    id: ''
  }

  const [ isUserSignedIn, setIsUserSignedIn ] = useState('none');
  const [ user, setUser ] = useState(initialUserState);

  const handleLogout = () => {
    setUser(initialUserState);
    setIsUserSignedIn('none');

    window.location.href = process.env.REACT_APP_REDIRECT_URI;
  }

  return (
    isUserSignedIn === 'none'
      ? <div>
          <GoogleButton setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
          <FacebookButton setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
          <GithubButton setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
          <LinkedInButton setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
          <CustomSignInButton isUserSignedIn={isUserSignedIn} setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
        </div>
      : isUserSignedIn === 'custom'
        ? <CustomSignInButton isUserSignedIn={isUserSignedIn} setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
        : <MobileHandler user={user} handleLogout={handleLogout} />
  )
}

export default App

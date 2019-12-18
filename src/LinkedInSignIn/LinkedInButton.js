import React from 'react';

import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import LinkedInLogin from './LinkedInLogin';

const LinkedInButton = ({setIsUserSignedIn, setUser}) => {
  if(window.location.href.match('/linkedin')){
    return <LinkedInPopUp />
  }else{
    return <LinkedInLogin setIsUserSignedIn={setIsUserSignedIn} setUser={setUser} />
  }
}

export default LinkedInButton;
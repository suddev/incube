import React from 'react';

import { ButtonStyles } from '../Utility/ButtonStyles';
import logo from '../Pictures/logo_github.png';

const GithubButton = ({setIsUserSignedIn, setUser}) => {

  const handleLoginSuccess = async(code) => {
    console.log('Code ',code);   
    fetch(`http://localhost:3001/api/githubhandler?code=${encodeURIComponent(code)}`,
        { method: 'POST' })
        .then(resp => resp.json())
        .then(user => {
          if(user.status === 400){
            console.log('Error ', user);
          } else {
            setUser({
              name: user.name,
              email: user.email,
              pic: user.avatar_url,
              id: user.id
            })
            setIsUserSignedIn('github');
          }
        })
        .catch(err => console.log('ERROR ', err))
    }
   

  const handleLogin = () => {
    if(window.location.href.match('/?code=(.*)'))
      handleLoginSuccess(window.location.href.match('/?code=(.*)')[1]);
    else
      console.log('CODE COULD NOT BE GENERATED');
  }

  return (
    <div style={{textAlign: 'center'}}>  
      <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
          onClick={handleLogin()}
          style={{textDecoration: 'none'}} >

        <button style={ButtonStyles}>
          <img style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
          <span style={{float: 'left', padding: '5px'}}>Signup with Github</span>
        </button>

      </a>
    </div>
  );
}

export default GithubButton;
import React from 'react';

import { ButtonStyles } from '../Utility/ButtonStyles';
import logo from '../Pictures/logo_linkedin.png';
import { LinkedIn } from 'react-linkedin-login-oauth2';

const LinkedInLogin = ({setIsUserSignedIn, setUser}) => {

  const handleSuccess = async(data) => {
    const code = data.code;
    console.log('Code ',code);
    if(code){
      fetch(`http://localhost:3001/api/linkedinhandler?code=${encodeURIComponent(code)}`,
        { method: 'POST' })
        .then(resp => resp.json())
        .then(user => {
          if(user.status === 400){
            console.log('Error ', user);
          } else {
            setUser({
              name: user.localizedFirstName+" "+user.localizedLastName,
              email: user.email,
              pic: user.profilePicture["displayImage~"].elements[2].identifiers[0].identifier,
              id: user.id
            })
            setIsUserSignedIn('linkedin');
          }
        })
        .catch(err => console.log('ERROR ', err))
    }
  }

  return (
    <div style={{textAlign: 'center'}}>
      <LinkedIn
        clientId={process.env.REACT_APP_LINKEDIN_CLIENT_ID}
        scope='r_liteprofile'
        onSuccess={handleSuccess}
        onFailure={() => console.log('Login Failed')}
        redirectUri={process.env.REACT_APP_REDIRECT_URI+'/linkedin'}
        renderElement={renderProps => (
            <button onClick={renderProps.onClick} style={ButtonStyles}>
                <img style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
                <span style={{float: 'left', padding: '5px'}}>Signup with LinkedIn</span>
            </button>
          )}
        />
      </div>
  );
}

export default LinkedInLogin;
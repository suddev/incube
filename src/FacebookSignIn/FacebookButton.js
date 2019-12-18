import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { ButtonStyles } from '../Utility/ButtonStyles';
import logo from '../Pictures/logo_facebook.png';

const FacebookButton = ({setIsUserSignedIn, setUser}) => {

    const handleSuccess = (response) => {
        setUser({
            name: response.name,
            email: response.email,
            pic: response.picture.data.url,
            id: response.id
        })
        setIsUserSignedIn('facebook');
    }

    return (
        <div style={{textAlign: 'center'}}>
            {
                !window.location.href.match('/?code=(.*)')
                &&
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                    fields="id,name,email,birthday,age_range,favorite_athletes,gender,quotes,location,favorite_teams,photos,friends,feed,likes,hometown,picture.type(large),link,movies,music,short_name"
                    scope='email, user_age_range, user_birthday, user_friends, user_gender, user_hometown, user_likes, user_link, user_location, user_photos, user_posts, user_status, user_tagged_places'
                    callback={handleSuccess} 
                    render={renderProps => (
                        <button onClick={renderProps.onClick} style={ButtonStyles}>
                            <img style={{float: 'left'}} alt='logo' src={logo} height='30px' width='30px' />
                            <span style={{float: 'left', padding: '5px'}}>Signup with Facebook</span>
                        </button>
                        )}
                />
            }
        </div>
    );
}

export default FacebookButton;